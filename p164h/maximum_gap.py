from typing import List
from collections import defaultdict


class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        lo, hi, N = min(nums), max(nums), len(nums)
        if N <= 2 or hi == lo:
            return hi - lo
        buckets = defaultdict(list)
        for n in nums:
            ind = N - 2 if n == hi else (n - lo) * (N - 1) // (hi - lo)
            buckets[ind].append(n)
        cands = [[min(buckets[i]), max(buckets[i])] for i in range(N - 1) if buckets[i]]
        return max(y[0] - x[1] for x, y in zip(cands, cands[1:]))


# TESTS
for nums, expected in [
    ([3, 6, 9, 1], 3),
    ([10], 0),
    ([1, 9], 8),
    ([3, 14, 15, 83, 6, 4, 19, 20, 40], 43),
]:
    sol = Solution()
    actual = sol.maximumGap(nums)
    print("Max gap in", nums, "->", actual)
    assert actual == expected
