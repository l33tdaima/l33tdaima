class Solution:
    def diagonalSum(self, mat: list[list[int]]) -> int:
        ans, n = 0, len(mat)
        for i in range(n):
            ans += mat[i][i] + mat[i][n - 1 - i]
        if n % 2 == 1:
            ans -= mat[n // 2][n // 2]
        return ans


# TESTS
for mat, expected in [
    ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 25),
    ([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], 8),
    ([[5]], 5),
]:
    sol = Solution()
    actual = sol.diagonalSum(mat)
    assert actual == expected
