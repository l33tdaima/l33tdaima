from typing import List


class Solution:
    def findOrder(
        self, numCourses: int, prerequisites: List[List[int]]
    ) -> List[int]:
        graph = [[] for _ in range(numCourses)]
        for c, pre in prerequisites:
            graph[c].append(pre)

        ans, visited, onpath = (
            [],
            [False for _ in range(numCourses)],
            [False for _ in range(numCourses)],
        )

        # return true if there is cycle in the graph
        def topologicalSort(v: int) -> bool:
            if visited[v]:
                return False
            visited[v], onpath[v] = True, True
            for i in graph[v]:
                if onpath[i] or topologicalSort(i):
                    return True
            onpath[v] = False
            ans.append(v)
            return False

        for v in range(numCourses):
            if not visited[v] and topologicalSort(v):
                return []
        return ans


# TESTS
tests = [
    (1, [], [0]),
    (2, [[0, 1]], [1, 0]),
    (2, [[0, 1], [1, 0],], []),
    (4, [[0, 1], [1, 2], [3, 1],], [2, 1, 0, 3]),
    (4, [[1, 0], [2, 0], [3, 1], [3, 2],], [0, 1, 2, 3]),
]
for t in tests:
    sol = Solution()
    actual = sol.findOrder(t[0], t[1])
    print("Order of", t[0], "courses depicted by", t[1], "->", actual)
    assert actual == t[2]
