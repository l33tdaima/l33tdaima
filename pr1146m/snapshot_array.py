from bisect import bisect


class SnapshotArray:
    def __init__(self, length: int):
        self.store = [[[-1, 0]] for i in range(length)]
        self.snap_id = 0

    def set(self, index: int, val: int) -> None:
        self.store[index].append([self.snap_id, val])

    def snap(self) -> int:
        self.snap_id += 1
        return self.snap_id - 1

    def get(self, index: int, snap_id: int) -> int:
        history = self.store[index]
        v = bisect(history, [snap_id + 1])
        return history[v - 1][1]


# TESTS
sa = SnapshotArray(3)
sa.set(0, 5)
sa.snap()
sa.set(0, 6)
print(sa.get(0, 0))
