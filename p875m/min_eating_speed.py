from cmath import exp
from curses.ascii import SO
import math


class Solution:
    def minEatingSpeed(self, piles: list[int], h: int) -> int:
        lower, upper = 1, max(piles)
        while lower < upper:
            k = (lower + upper) // 2
            hk = sum(math.ceil(p / k) for p in piles)
            if hk <= h:
                upper = k
            else:
                lower = k + 1
        return lower


# TESTS
for piles, h, expected in [
    ([3, 6, 7, 11], 8, 4),
    ([30, 11, 23, 4, 20], 5, 30),
    ([30, 11, 23, 4, 20], 6, 23),
    ([3, 6, 7, 11, 2, 1990, 938081, 2, 334], 80, 13029),
]:
    sol = Solution()
    actual = sol.minEatingSpeed(piles, h)
    print("The minimum speed k to eat", piles, "within", h, "hours ->", actual)
    assert actual == expected
