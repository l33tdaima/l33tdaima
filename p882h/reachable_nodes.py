from typing import List
from collections import defaultdict
from heapq import heappush, heappop


class Solution:
    def reachableNodes(self, edges: List[List[int]], maxMoves: int, n: int) -> int:
        e = defaultdict(dict)
        for i, j, cnt in edges:
            e[i][j] = e[j][i] = cnt

        # max heap of (moves, node)
        pq, seen = [(-maxMoves, 0)], defaultdict(int)
        while pq:
            m, i = heappop(pq)
            if i not in seen:
                seen[i] = -m
                for j in e[i]:
                    x = -m - e[i][j] - 1
                    if j not in seen and x >= 0:
                        heappush(pq, (-x, j))
        return len(seen) + sum(min(k, seen[i] + seen[j]) for i, j, k in edges)


# TESTS
for edges, maxMoves, n, expected in [
    ([[0, 1, 10], [0, 2, 1], [1, 2, 2]], 6, 3, 13),
    ([[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], 10, 4, 23),
    ([[1, 2, 4], [1, 4, 5], [1, 3, 1], [2, 3, 4], [3, 4, 5]], 17, 5, 1),
]:
    sol = Solution()
    actual = sol.reachableNodes(edges, maxMoves, n)
    print("Reachable nodes in", edges, ", maxMoves =", maxMoves, "->", actual)
    assert actual == expected
