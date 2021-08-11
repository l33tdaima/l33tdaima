class Solution:
    def minFlipsMonoIncr2Passes(self, s: str) -> int:
        l = 0
        r = ans = len(s) - sum(map(lambda x: 1 if x == "1" else 0, s))
        for c in s:  # cut behind n
            if c == "0":
                r -= 1
            else:
                l += 1
            ans = min(ans, l + r)
        return ans

    def minFlipsMonoIncr1Pass(self, s: str) -> int:
        ones, flips = 0, 0
        for c in s:
            if c == "1":
                ones += 1
            else:
                flips += 1
            flips = min(flips, ones)
        return flips


# TESTS
for s, expected in [
    ("00110", 1),
    ("010110", 2),
    ("00011000", 2),
]:
    sol = Solution()
    actual = sol.minFlipsMonoIncr2Passes(s)
    print("Min # of flips for ", s, " to monotone increasing ->", actual)
    assert actual == expected
    assert expected == sol.minFlipsMonoIncr1Pass(s)
