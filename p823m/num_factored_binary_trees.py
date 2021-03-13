from typing import List


class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        dp = dict()
        for a in sorted(arr):
            # print(dp, ", a =", a)
            dp[a] = 1 + sum(dp[i] * dp.get(a // i, 0) for i in dp if a % i == 0)
        return sum(dp.values()) % (10 ** 9 + 7)


# TESTS
for arr, expected in [
    ([2, 4], 3),
    ([2, 4, 5, 10], 7),
    ([15, 13, 22, 7, 11], 5),
]:
    sol = Solution()
    actual = sol.numFactoredBinaryTrees(arr)
    print("# of factored binary trees we can make out of", arr, "->", actual)
    assert actual == expected
