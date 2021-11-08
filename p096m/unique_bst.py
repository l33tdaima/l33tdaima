class Solution:
    memo = dict()

    def numTrees(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1
        if n in Solution.memo:
            return Solution.memo[n]
        ans = 0
        for r in range(n):
            ans += self.numTrees(r) * self.numTrees(n - r - 1)
        Solution.memo[n] = ans
        return ans


# TESTS
for n, expected in [
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 5],
    [4, 14],
    [5, 42],
    [6, 132],
]:
    sol = Solution()
    actual = sol.numTrees(n)
    print("# of unique BSTs storing values up to", n, "->", actual)
    assert actual == expected
