from heapq import heappop, heappush


class Solution:
    def minimumEffortPath(self, heights: list[list[int]]) -> int:
        rows, cols = len(heights), len(heights[0])
        dist = [[float("inf")] * cols for _ in range(rows)]
        minheap = [(0, 0, 0)]  # (dist, row, col)
        DIR = [0, 1, 0, -1, 0]
        while minheap:
            d, r, c = heappop(minheap)
            if d > dist[r][c]:
                continue
            if r == rows - 1 and c == cols - 1:
                return d
            for i in range(4):
                nr, nc = r + DIR[i], c + DIR[i + 1]
                if 0 <= nr < rows and 0 <= nc < cols:
                    newdist = max(d, abs(heights[nr][nc] - heights[r][c]))
                    if newdist < dist[nr][nc]:
                        dist[nr][nc] = newdist
                        heappush(minheap, (newdist, nr, nc))


# TESTS
for heights, expected in [
    ([[1, 2, 2], [3, 8, 2], [5, 3, 5]], 2),
    ([[1, 2, 3], [3, 8, 4], [5, 3, 5]], 1),
    (
        [
            [1, 2, 1, 1, 1],
            [1, 2, 1, 2, 1],
            [1, 2, 1, 2, 1],
            [1, 2, 1, 2, 1],
            [1, 1, 1, 2, 1],
        ],
        0,
    ),
]:
    sol = Solution()
    actual = sol.minimumEffortPath(heights)
    print("Minimum effort travelling", heights, "->", actual)
    assert actual == expected
