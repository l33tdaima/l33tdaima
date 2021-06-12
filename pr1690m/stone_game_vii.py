from typing import List
from itertools import accumulate


class Solution:
    def stoneGameVII(self, stones: List[int]) -> int:
        N = len(stones)
        dp = [[0] * N for _ in range(N)]
        psum = [0] + list(accumulate(stones))

        def dfs(i: int, j: int) -> int:
            if i == j:
                return 0
            if dp[i][j] == 0:
                s = psum[j + 1] - psum[i]
                dp[i][j] = max(
                    s - stones[i] - dfs(i + 1, j), s - stones[j] - dfs(i, j - 1)
                )
            return dp[i][j]

        return dfs(0, N - 1)

# TESTS
for stones, expected in [ 
    ([5,3,1,4,2], 6),
    ([7,90,5,1,100,10,10,2], 122),
]:
    sol = Solution()
    actual = sol.stoneGameVII(stones)
    print("The difference in Alice and Bob's score for stones", stones, "->", actual)
    assert actual == expected
