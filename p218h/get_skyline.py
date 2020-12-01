from typing import List
from heapq import heappush, heapify


class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        # 1. Extract and sort the critical points
        cpoints = []
        for b in buildings:
            cpoints.append([b[0], -b[2]])  # L
            cpoints.append([b[1], b[2]])  # R
        cpoints.sort()
        # 2. Scan the critical points
        skyline, heap = [], [0]
        for x, y in cpoints:
            if y < 0:
                heappush(heap, y)
            else:
                heap.remove(-y)
                heapify(heap)
            if len(skyline) == 0 or -heap[0] != skyline[-1][1]:
                skyline.append([x, -heap[0]])
        return skyline


# TESTS
for buildings, expected in [
    [[[0, 2, 3], [2, 5, 3],], [[0, 3], [5, 0],],],
    [[[0, 1, 3]], [[0, 3], [1, 0],],],
    [
        [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8],],
        [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0],],
    ],
]:
    sol = Solution()
    actual = sol.getSkyline(buildings)
    print("Skyline of", buildings, "->", actual)
    assert actual == expected
