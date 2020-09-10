from itertools import zip_longest


class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        v1s, v2s = (
            list(map(int, version1.split("."))),
            list(map(int, version2.split("."))),
        )
        for v1, v2 in zip_longest(v1s, v2s, fillvalue=0):
            if v1 < v2:
                return -1
            if v1 > v2:
                return 1
        return 0


# TESTS
tests = [
    ("0.1", "1.1", -1),
    ("1.0.1", "1", 1),
    ("7.5.2.4", "7.5.3", -1),
    ("1.01", "1.001", 0),
    ("1.0", "1.0.0", 0),
]
for version1, version2, expected in tests:
    sol = Solution()
    actual = sol.compareVersion(version1, version2)
    print("Compare version", version1, version2, "->", actual)
    assert actual == expected
