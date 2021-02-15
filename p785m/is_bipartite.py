from typing import List


class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        party = [None] * len(graph)
        for i in range(len(graph)):
            if party[i] is not None:
                continue
            party[i] = True
            queue = [i]
            while queue:
                u = queue.pop(0)
                for v in graph[u]:
                    if party[v] is None:
                        party[v] = not party[u]
                        queue.append(v)
                    else:
                        if party[v] == party[u]:
                            return False
        return True


# TESTS
for graph, expected in [
    [[[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]], False],
    [[[1, 3], [0, 2], [1, 3], [0, 2]], True],
    [[[3], [2, 4], [1], [0, 4], [1, 3]], True],
    [[[1], [0, 3], [3], [1, 2]], True],
    [[[1], [0]], True],
    [[[1, 2], [0], [0]], True],
    [[[1, 2], [0, 2], [0, 1]], False],
    [
        [
            [],
            [2, 4, 6],
            [1, 4, 8, 9],
            [7, 8],
            [1, 2, 8, 9],
            [6, 9],
            [1, 5, 7, 8, 9],
            [3, 6, 9],
            [2, 3, 4, 6, 9],
            [2, 4, 5, 6, 7, 8],
        ],
        False,
    ],
]:
    sol = Solution()
    actual = sol.isBipartite(graph)
    print("Is graph", graph, "bipartite? ->", actual)
    assert actual == expected
