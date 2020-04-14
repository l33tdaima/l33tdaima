from typing import List
import heapq


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        h = [-n for n in stones]
        heapq.heapify(h)
        while len(h) > 1:
            y = heapq.heappop(h)
            x = heapq.heappop(h)
            if y != x:
                heapq.heappush(h, y - x)
        return -h[0] if len(h) > 0 else 0

    # Looks graceful but slower
    def lastStoneWeightV2(self, stones: List[int]) -> int:
        h = [-n for n in stones]
        heapq.heapify(h)
        while len(h) > 1 and h[0] != 0:
            heapq.heappush(h, heapq.heappop(h) - heapq.heappop(h))
        return -h[0]


# TESTS
tests = [([1, 2, 3], 0), ([2, 7, 4, 1, 8, 1], 1)]
for t in tests:
    sol = Solution()
    actual = sol.lastStoneWeight(t[0])
    print("Last stone weight in", t[0], "->", actual)
    assert actual == t[1]
