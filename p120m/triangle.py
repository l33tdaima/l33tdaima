from typing import List


class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)
        dp = list(triangle[-1])
        for i in range(n - 2, -1, -1): 
            for j in range(len(triangle[i])):
                dp[j] = min(dp[j], dp[j + 1]) + triangle[i][j]
        return dp[0]


# TESTS
for triangle, expected in [
    ([[1]], 1),
    ([[1], [2, 3]], 3),
    ([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]], 11),
    ([[-10]], -10),
]:
    sol = Solution()
    actual = sol.minimumTotal(triangle)
    print("Minimal path sum of", triangle, "->", actual)
    assert actual == expected

