class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        ans = [[1]]
        for n in range(1, numRows):
            ans.append(
                list(map(lambda a, b: a + b, [0] + ans[-1], ans[-1] + [0]))
            )
        return ans


for numRows, expected in [
    (1, [[1]]),
    (5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]),
]:
    sol = Solution()
    actual = sol.generate(numRows)
    print("Pascal's triangle of", numRows, "->", actual)
    assert actual == expected
