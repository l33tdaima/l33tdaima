class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        ones, flips = 0, 0
        for c in s:
            if c == "1":
                ones += 1
            else:
                flips = min(flips + 1, ones)
        return flips


# TESTS
for s, expected in [
    ("00110", 1),
    ("010110", 2),
    ("00011000", 2),
]:
    sol = Solution()
    actual = sol.minFlipsMonoIncr(s)
    print("Min # of flips for ", s, " to monotone increasing ->", actual)
    assert actual == expected
