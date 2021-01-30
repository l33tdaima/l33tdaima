from typing import List
from heapq import heappop, heappush, heapify


class Solution:
    def minimumDeviation(self, nums: List[int]) -> int:
        maxheap = [-n * 2 if n & 1 else -n for n in nums]
        heapify(maxheap)

        minv = -max(maxheap)
        mindiff = float("Inf")
        while maxheap[0] & 1 == 0:
            n = heappop(maxheap)
            mindiff = min(mindiff, -n - minv)
            heappush(maxheap, n // 2)
            minv = min(minv, -n // 2)
        return min(mindiff, -maxheap[0] - minv)


# TESTS
for nums, expected in [
    ([1, 2], 0),
    ([3, 5], 1),
    ([1, 2, 3, 4], 1),
    ([4, 1, 5, 20, 3], 3),
    ([2, 10, 8], 3),
]:
    sol = Solution()
    actual = sol.minimumDeviation(nums)
    print("The minimum deviation", nums, "can have ->", actual)
    assert actual == expected
