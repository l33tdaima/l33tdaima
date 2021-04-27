from typing import List
from heapq import heappop, heappush


class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        heap = []
        for i in range(len(heights) - 1):
            d = heights[i + 1] - heights[i]
            if d <= 0:
                continue
            heappush(heap, d)
            if len(heap) > ladders:
                bricks -= heappop(heap)
            if bricks < 0:
                return i
        return len(heights) - 1


# TESTS
for heights, bricks, ladders, expected in [
    ([4, 2, 7, 6, 9, 14, 12], 5, 1, 4),
    ([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2, 7),
    ([14, 3, 19, 3], 17, 0, 3),
]:
    sol = Solution()
    actual = sol.furthestBuilding(heights, bricks, ladders)
    print(
        "The furthest building in",
        heights,
        "given bricks",
        bricks,
        "ladders",
        ladders,
        "->",
        actual,
    )
    assert actual == expected
