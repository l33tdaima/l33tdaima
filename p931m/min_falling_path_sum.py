class Solution:
    def minFallingPathSum(self, matrix: list[list[int]]) -> int:
        dp, n = matrix[0], len(matrix)
        for row in matrix[1:]:
            new_dp = row
            for i in range(n):
                new_dp[i] += min(dp[max(i - 1, 0) : min(i + 2, n)])
            dp = new_dp
        return min(dp)


# TESTS
for matrix, expected in [
    ([[2, 1, 3], [6, 5, 4], [7, 8, 9]], 13),
    ([[-19, 57], [-40, -5]], -59),
]:
    sol = Solution()
    actual = sol.minFallingPathSum(matrix)
    print("The minimum falling path sum of", matrix, "->", actual)
    assert actual == expected
