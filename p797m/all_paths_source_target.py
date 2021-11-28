from typing import List


class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        n, ans = len(graph), []

        def dfs(path: List[int]) -> None:
            if path[-1] == n - 1:
                ans.append(path[:])
            else:
                for v in graph[path[-1]]:
                    path.append(v)
                    dfs(path)
                    path.pop()

        dfs([0])
        return ans


# TESTS
for graph, expected in [
    ([[1, 2], [3], [3], []], [[0, 1, 3], [0, 2, 3]]),
    (
        [[4, 3, 1], [3, 2, 4], [3], [4], []],
        [[0, 4], [0, 3, 4], [0, 1, 3, 4], [0, 1, 2, 3, 4], [0, 1, 4]],
    ),
    ([[1], []], [[0, 1]]),
    ([[1, 2, 3], [2], [3], []], [[0, 1, 2, 3], [0, 2, 3], [0, 3]]),
    ([[1, 3], [2], [3], []], [[0, 1, 2, 3], [0, 3]]),
]:
    sol = Solution()
    actual = sol.allPathsSourceTarget(graph)
    print("All paths in graph", graph, "->", actual)
    assert sorted(actual) == sorted(expected)
