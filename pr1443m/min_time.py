from collections import defaultdict


class Solution:
    def minTime(
        self, n: int, edges: list[list[int]], hasApple: list[bool]
    ) -> int:
        def dfs(node: int, prev: int) -> bool:
            for neighbor in graph[node]:
                if neighbor != prev and dfs(neighbor, node):
                    hasApple[node] = True
            return hasApple[node]

        graph = defaultdict(list)
        for f, t in edges:
            graph[f].append(t)
            graph[t].append(f)
        dfs(0, -1)
        return (sum(hasApple) - hasApple[0]) * 2


# TESTS
for n, edges, hasApple, expected in [
    (
        7,
        [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]],
        [False, False, True, False, True, True, False],
        8,
    ),
    (
        7,
        [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]],
        [False, False, True, False, False, True, False],
        6,
    ),
    (
        7,
        [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]],
        [False, False, False, False, False, False, False],
        0,
    ),
]:
    sol = Solution()
    actual = sol.minTime(n, edges, hasApple)
    print("Minimum Time to Collect All Apples ->", actual)
    assert actual == expected
