from typing import List


class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l = 0
        for r in range(len(nums)):
            k -= 1 - nums[r]
            if k < 0:
                k += 1 - nums[l]
                l += 1
        return r - l + 1


for nums, k, expected in [
    ([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2, 6),
    ([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3, 10),
]:
    sol = Solution()
    actual = sol.longestOnes(nums, k)
    print("Max consecutive ones in", nums, "flipping", k, "zeros ->", actual)
    assert actual == expected
