from collections import defaultdict


class TimeMap:
    def __init__(self):
        self.store = defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        if not key in self.store:
            return ""

        # binary search
        tvs = self.store[key]
        l, r = 0, len(tvs) - 1
        while l < r:
            m = (l + r) // 2 + 1
            t, _ = tvs[m]
            if t > timestamp:
                r = m - 1
            else:
                l = m
        return tvs[l][1] if tvs[l][0] <= timestamp else ""


# TEST
tm = TimeMap()
tm.set("foo", "bar", 2)
print(tm.store)
print("test #1", tm.get("none", 2) == "")
print("test #2", tm.get("foo", 2) == "bar")
print("test #3", tm.get("foo", 3) == "bar")
tm.set("foo", "bar2", 4)
print(tm.store)
print("test #4", tm.get("foo", 4) == "bar2")
print("test #5", tm.get("foo", 10) == "bar2")
print("test #6", tm.get("foo", 1) == "")
