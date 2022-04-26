from cmath import exp
from heapq import heappop, heappush


class Solution:
    def minCostConnectPoints(self, points: list[list[int]]) -> int:
        manhattan = lambda p1, p2: abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])
        ans, n, visited = 0, len(points), set()
        heap = [(0, (0, 0))]  # weight, (src, dest)
        while len(visited) < n:
            w, (_, v) = heappop(heap)
            if v in visited:
                continue
            ans += w
            visited.add(v)
            for i in range(n):
                if i not in visited:
                    heappush(heap, (manhattan(points[i], points[v]), (v, i)))
        return ans


for points, expected in [
    ([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]], 20),
    ([[3, 12], [-2, 5], [-4, 1]], 18),
]:
    sol = Solution()
    actual = sol.minCostConnectPoints(points)
    print("The minimum cost to connect points", points, "->", actual)
    assert actual == expected
