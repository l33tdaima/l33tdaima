from typing import List
from collections import Counter
from heapq import heapify, heappop


class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        counter = Counter(arr)
        maxheap = [-c for _, c in counter.items()]
        heapify(maxheap)
        ans, t, target = 0, 0, len(arr) // 2
        while t < target:
            t -= heappop(maxheap)
            ans += 1
        return ans


# TESTS
for arr, expected in [
    ([3, 3, 3, 3, 5, 5, 5, 2, 2, 7], 2),
    ([7, 7, 7, 7, 7, 7], 1),
    ([1, 9], 1),
    ([1000, 1000, 3, 7], 1),
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
]:
    sol = Solution()
    actual = sol.minSetSize(arr)
    print("The mininum set size to remove half of", arr, "->", actual)
    assert actual == expected
