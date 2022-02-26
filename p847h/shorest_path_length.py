from cmath import exp
from curses.ascii import SO


class Solution:
    def shortestPathLength(self, graph: list[list[int]]) -> int:
        memo, final, steps = set(), (1 << len(graph)) - 1, 0
        queue = [(i, 1 << i) for i in range(len(graph))]
        while True:
            new = []
            for node, state in queue:
                if state == final:
                    return steps
                for v in graph[node]:
                    if (v, state | 1 << v) not in memo:
                        new.append((v, state | 1 << v))
                        memo.add((v, state | 1 << v))
            queue = new
            steps += 1


# TESTS
for graph, expected in [
    ([[1, 2, 3], [0], [0], [0]], 4),
    ([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]], 4),
]:
    sol = Solution()
    actual = sol.shortestPathLength(graph)
    print("Shortest path to visit all nodes in", graph, "->", actual)
    assert actual == expected
