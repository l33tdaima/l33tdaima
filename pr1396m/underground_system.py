class UndergroundSystem:
    def __init__(self):
        self.id_checkin = dict()  # id -> (start, t)
        self.stats = dict()  # (start, end) -> (total, n)

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.id_checkin[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        start, tin = self.id_checkin[id]
        total, n = self.stats.get((start, stationName), (0, 0))
        self.stats[(start, stationName)] = (total + (t - tin), n + 1)

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        total, n = self.stats[(startStation, endStation)]
        return total / n


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)
for seq, expected in [
    (
        [
            ["checkIn", 45, "Leyton", 3],
            ["checkIn", 32, "Paradise", 8],
            ["checkIn", 27, "Leyton", 10],
            ["checkOut", 45, "Waterloo", 15],
            ["checkOut", 27, "Waterloo", 20],
            ["checkOut", 32, "Cambridge", 22],
            ["getAverageTime", "Paradise", "Cambridge"],
            ["getAverageTime", "Leyton", "Waterloo"],
            ["checkIn", 10, "Leyton", 24],
            ["getAverageTime", "Leyton", "Waterloo"],
            ["checkOut", 10, "Waterloo", 38],
            ["getAverageTime", "Leyton", "Waterloo"],
        ],
        [
            None,
            None,
            None,
            None,
            None,
            None,
            14.00000,
            11.00000,
            None,
            11.00000,
            None,
            12.00000,
        ],
    ),
    (
        [
            ["checkIn", 10, "Leyton", 3],
            ["checkOut", 10, "Paradise", 8],
            ["getAverageTime", "Leyton", "Paradise"],
            ["checkIn", 5, "Leyton", 10],
            ["checkOut", 5, "Paradise", 16],
            ["getAverageTime", "Leyton", "Paradise"],
            ["checkIn", 2, "Leyton", 21],
            ["checkOut", 2, "Paradise", 30],
            ["getAverageTime", "Leyton", "Paradise"],
        ],
        [None, None, 5.00000, None, None, 5.50000, None, None, 6.666666666666667],
    ),
]:
    us = UndergroundSystem()

    def func(x):
        method, *args = x
        if method == "checkIn":
            return us.checkIn(*args)
        elif method == "checkOut":
            return us.checkOut(*args)
        else:
            return us.getAverageTime(*args)

    actual = list(map(func, seq))
    print("Input:", seq)
    print("Output:", actual)
    assert actual == expected

