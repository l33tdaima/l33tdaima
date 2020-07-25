from typing import List


class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        ans, visited = [], [False for _ in graph]

        def helper(target: int, path: List[int]) -> None:
            if path[-1] == target:
                ans.append(list(path))
                return
            for v in graph[path[-1]]:
                path.append(v)
                visited[v] = True
                helper(target, path)
                visited[v] = False
                path.pop()

        visited[0] = True
        helper(target=len(graph) - 1, path=[0])
        return ans


# TESTS
tests = [
    ([[1], []], [[0, 1]]),
    ([[1], [0]], [[0, 1]]),
    ([[1, 2], [3], [3], []], [[0, 1, 3], [0, 2, 3]]),
]
for t in tests:
    sol = Solution()
    actual = sol.allPathsSourceTarget(t[0])
    print("All paths in graph", t[0], "->", actual)
    assert sorted(actual) == t[1]
