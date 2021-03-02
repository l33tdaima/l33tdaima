from typing import List


class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        return min(len(candyType) // 2, len(set(candyType)))


# TESTS
for candyType, expected in [
    ([1, 1, 2, 2, 3, 3], 3),
    ([1, 1, 2, 3], 2),
    ([6, 6, 6, 6], 1),
]:
    sol = Solution()
    actual = sol.distributeCandies(candyType)
    print("The maximum number of different types in", candyType, "->", actual)
    assert actual == expected
