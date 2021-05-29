from typing import List
from itertools import accumulate


class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        ans, l, seen, psum = 0, 0, dict(), [0] + list(accumulate(nums))
        for r, n in enumerate(nums):
            if n in seen and seen[n] >= l:
                ans = max(ans, psum[r] - psum[l])
                l = seen[n] + 1
            seen[n] = r
        return max(ans, psum[-1] - psum[l])


# TESTS
for nums, expected in [
    ([4, 2, 4, 5, 6], 17),
    ([5, 2, 1, 2, 5, 2, 1, 2, 5], 8),
    ([1, 2, 3, 4, 5, 6], 21),
    ([1, 2, 3, 4, 5, 3], 15),
]:
    sol = Solution()
    actual = sol.maximumUniqueSubarray(nums)
    print("Maximum erasure value in", nums, "->", actual)
    assert actual == expected
