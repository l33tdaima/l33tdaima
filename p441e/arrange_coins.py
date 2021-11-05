class Solution:
    def arrangeCoins(self, n: int) -> int:
        lo, hi = 0, n // 2 + 1
        while lo < hi:
            m = (lo + hi) // 2 + 1
            if m * (m + 1) <= 2 * n:
                lo = m
            else:
                hi = m - 1
        return lo


# TESTS
for n, expected in [
    (0, 0),
    (1, 1),
    (2, 1),
    (3, 2),
    (5, 2),
    (8, 3),
]:
    sol = Solution()
    actual = sol.arrangeCoins(n)
    print("Given n =", n, "the total # of full staircase rows ->", actual)
    assert actual == expected
