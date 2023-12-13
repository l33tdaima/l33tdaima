class Solution:
    def numSpecial(self, mat: list[list[int]]) -> int:
        row_sum, col_sum = [0] * len(mat), [0] * len(mat[0])
        for i, row in enumerate(mat):
            for j, val in enumerate(row):
                row_sum[i] += val
                col_sum[j] += val

        ans = 0
        for i, row in enumerate(mat):
            for j, val in enumerate(row):
                if val == 1 and row_sum[i] == 1 and col_sum[j] == 1:
                    ans += 1
        return ans


# TESTS
for mat, expected in [
    ([[1, 0, 0], [0, 0, 1], [1, 0, 0]], 1),
    ([[1, 0, 0], [0, 1, 0], [0, 0, 1]], 3),
]:
    sol = Solution()
    actual = sol.numSpecial(mat)
    print("Number of special position in", mat, "->", actual)
    assert actual == expected
