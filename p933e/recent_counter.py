from collections import deque


class RecentCounter:
    def __init__(self):
        self.queue = deque()

    def ping(self, t: int) -> int:
        self.queue.append(t)
        while len(self.queue) > 0 and t - self.queue[0] > 3000:
            self.queue.popleft()
        return len(self.queue)


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)
tests = [
    ([1], [1]),
    ([1, 100, 3001, 3002], [1, 2, 3, 3]),
    ([1, 100, 5001, 5002, 8300], [1, 2, 1, 2, 1]),
]
for times, expected in tests:
    rc = RecentCounter()
    actual = [rc.ping(t) for t in times]
    assert actual == expected
