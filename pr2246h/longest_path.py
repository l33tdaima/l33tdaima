from collections import defaultdict
from heapq import nlargest


class Solution:
    def longestPath(self, parent: list[int], s: str) -> int:
        graph = defaultdict(list)
        for i, p in enumerate(parent):
            if p >= 0:
                graph[p].append(i)

        def dfs(i: int) -> int:
            nonlocal ans
            candi = [0]
            for child in graph[i]:
                cur = dfs(child)
                if s[i] != s[child]:
                    candi.append(cur)
            candi = nlargest(2, candi)
            ans = max(ans, sum(candi) + 1)
            return max(candi) + 1

        ans = 0
        dfs(0)
        return ans


# TESTS
for parent, s, expected in [
    ([-1, 0, 0, 1, 1, 2], "abacbe", 3),
    ([-1, 0, 0, 0], "aabc", 3),
]:
    sol = Solution()
    actual = sol.longestPath(parent, s)
    print("The longest path in", parent, s, "->", actual)
    assert actual == expected
