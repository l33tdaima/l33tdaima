from typing import List


class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m, n = len(obstacleGrid), len(obstacleGrid[0])
        dp = [0] * (n + 1)
        dp[1] = 1
        for i in range(m):
            for j in range(n):
                dp[j + 1] = 0 if obstacleGrid[i][j] else dp[j + 1] + dp[j]
        return dp[-1]


# TESTS
for obstacleGrid, expected in [
    ([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 2),
    ([[0, 1], [0, 0]], 1),
]:
    sol = Solution()
    actual = sol.uniquePathsWithObstacles(obstacleGrid)
    print("Unique paths in", obstacleGrid, "->", actual)
    assert actual == expected
