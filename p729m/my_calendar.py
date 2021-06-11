class MyCalendar:
    def __init__(self):
        self.events = list()

    def book(self, start: int, end: int) -> bool:
        l, r = 0, len(self.events)
        while l < r:
            m = (l + r) // 2
            ms, me = self.events[m]
            if end <= ms:
                r = m
            elif me <= start:
                l = m + 1
            else:
                return False
        self.events = self.events[:l] + [(start, end)] + self.events[l:]
        # print(self.events)
        return True


# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)
for events, expected in [
    ([[10, 20], [15, 25], [20, 30]], [True, False, True]),
    ([[1, 2], [3, 4], [2, 3]], [True, True, True]),
    (
        [[20, 29], [13, 22], [44, 50], [1, 7], [2, 10], [14, 20], [19, 25]],
        [True, False, True, True, False, True, False],
    ),
]:
    mycal = MyCalendar()
    actual = [mycal.book(start, end) for start, end in events]
    print("Events", events, "can be booked ->", actual)
    assert actual == expected
