from typing import List
from collections import defaultdict


class Solution:
    def maxUncrossedLinesV1(self, A: List[int], B: List[int]) -> int:
        lena, lenb = len(A), len(B)
        dp = [[0 for j in range(lenb + 1)] for i in range(lena + 1)]
        for i in range(1, lena + 1):
            for j in range(1, lenb + 1):
                if A[i - 1] == B[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
        return dp[lena][lenb]

    # Slower but looks cool
    def maxUncrossedLinesV2(self, A: List[int], B: List[int]) -> int:
        lena, lenb = len(A), len(B)
        dp = defaultdict(int)
        for i in range(lena):
            for j in range(lenb):
                dp[i, j] = max(
                    dp[i - 1, j - 1] + (A[i] == B[j]),
                    dp[i - 1, j],
                    dp[i, j - 1],
                )
        return dp[lena - 1, lenb - 1]


# TESTS
tests = [
    ([1, 4, 2], [1, 2, 4], 2),
    ([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2], 3),
    ([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1], 2),
]
for t in tests:
    sol = Solution()
    actual = sol.maxUncrossedLinesV1(t[0], t[1])
    print("The maximum number of connecting lines ->", actual)
    assert actual == t[2]
    assert t[2] == sol.maxUncrossedLinesV2(t[0], t[1])
