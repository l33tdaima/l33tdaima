from typing import List
from heapq import nlargest, heappush, heappop


class Solution:
    def findKthLargestV1(self, nums: List[int], k: int) -> int:
        return nlargest(k, nums)[-1]

    def findKthLargestV2(self, nums: List[int], k: int) -> int:
        minheap = []
        for i, n in enumerate(nums):
            heappush(minheap, n)
            if len(minheap) > k:
                heappop(minheap)
        return minheap[0]


# TESTS
for nums, k, expected in [
    ([99, 99, 99], 1, 99,),
    ([3, 2, 1, 5, 6, 4], 3, 4),
    ([3, 2, 1, 5, 6, 4], 2, 5),
    ([3, 2, 1, 5, 6, 4], 3, 4),
    ([3, 2, 1, 5, 6, 4], 1, 6),
    ([3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4),
]:
    sol = Solution()
    actual = sol.findKthLargestV2(nums, k)
    print(f"The {k}th largest of", nums, "->", actual)
    assert actual == expected
