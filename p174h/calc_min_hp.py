from typing import List
from collections import defaultdict


class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        M, N = len(dungeon), len(dungeon[0])
        hp = defaultdict(lambda: float("Inf"))
        hp[M, N - 1], hp[M - 1, N] = 1, 1
        for i in range(M - 1, -1, -1):
            for j in range(N - 1, -1, -1):
                hp[i, j] = max(min(hp[i, j + 1], hp[i + 1, j]) - dungeon[i][j], 1)
        return hp[0, 0]


# TESTS
for dungeon, expected in [
    ([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]], 7),
    ([[0]], 1),
]:
    sol = Solution()
    actual = sol.calculateMinimumHP(dungeon)
    print("Minimum initial health", dungeon, "->", actual)
    assert actual == expected
