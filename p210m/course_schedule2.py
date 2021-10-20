from typing import List
from collections import defaultdict


class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = defaultdict(list)
        for c, pre in prerequisites:
            graph[c].append(pre)

        ans = []
        visited = [False for _ in range(numCourses)]
        onpath = [False for _ in range(numCourses)]

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
for numCourses, prerequisites, expected in [
    (1, [], [0]),
    (2, [[0, 1]], [1, 0]),
    (
        2,
        [
            [0, 1],
            [1, 0],
        ],
        [],
    ),
    (
        4,
        [
            [0, 1],
            [1, 2],
            [3, 1],
        ],
        [2, 1, 0, 3],
    ),
    (
        4,
        [
            [1, 0],
            [2, 0],
            [3, 1],
            [3, 2],
        ],
        [0, 1, 2, 3],
    ),
]:
    sol = Solution()
    actual = sol.findOrder(numCourses, prerequisites)
    print("Order of", numCourses, "courses depicted by", prerequisites, "->", actual)
    assert actual == expected
