from functools import lru_cache


class Solution:
    def maxValueOfCoins(self, piles: list[list[int]], k: int) -> int:
        @lru_cache(None)
        def dp(i: int, k: int) -> int:
            if k == 0 or i == len(piles):
                return 0
            ret, cur = dp(i + 1, k), 0
            for j in range(min(len(piles[i]), k)):
                cur += piles[i][j]
                ret = max(ret, cur + dp(i + 1, k - j - 1))
            return ret

        return dp(0, k)


# TESTS
for piles, k, expected in [
    ([[1, 100, 3], [7, 8, 9]], 2, 101),
    ([[1, 100, 3], [7, 8, 9]], 3, 108),
    (
        [[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]],
        7,
        706,
    ),
]:
    sol = Solution()
    actual = sol.maxValueOfCoins(piles, k)
    print("Maximum Value of", k, "Coins From Piles", piles, "->", actual)
    assert actual == expected
