class Solution:
    def minCostToMoveChips(self, position: list[int]) -> int:
        odds = sum(x % 2 for x in position)
        return min(odds, len(position) - odds)


# TESTS
for position, expected in [
    ([1, 2, 3], 1),
    ([2, 2, 2, 3, 3], 2),
    ([1, 1000000000], 1),
    ([1, 2, 3, 1, 5, 6, 9, 40], 3),
    ([6, 4, 7, 8, 2, 10, 2, 7, 9, 7], 4),
]:
    sol = Solution()
    actual = sol.minCostToMoveChips(position)
    print("Minimum cost to move", position, "->", actual)
    assert actual == expected
