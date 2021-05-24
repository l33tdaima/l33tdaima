from typing import List
from functools import lru_cache
from itertools import permutations


class Solution:
    def shortestSuperstring(self, words: List[str]) -> str:
        @lru_cache
        def connect(w1: str, w2: str):
            return [w2[i:] for i in range(len(w1) + 1) if w1[-i:] == w2[:i] or not i][
                -1
            ]

        N = len(words)
        # dp[set_of_nodes][i] is cost of last visited node i via a set of visited nodes represented by a mask
        # the cost is a tuple of (len of built string, built string)
        dp = [[(float("inf"), "")] * N for _ in range(1 << N)]
        for i in range(N):
            dp[1 << i][i] = (len(words[i]), words[i])

        for mask in range(1 << N):
            visited = [j for j in range(N) if mask & 1 << j]
            for j, k in permutations(visited, 2):
                cand = dp[mask ^ 1 << j][k][1] + connect(words[k], words[j])
                dp[mask][j] = min(dp[mask][j], (len(cand), cand))

        return min(dp[-1])[1]


# TESTS
for words, expected in [
    (["alex", "loves", "leetcode"], "alexlovesleetcode"),
    (["catg", "ctaagt", "gcta", "ttca", "atgcatc"], "gctaagttcatgcatc"),
]:
    sol = Solution()
    actual = sol.shortestSuperstring(words)
    print("The shortest superstring in", words, "->", actual)
