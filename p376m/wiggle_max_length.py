from typing import List


class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return len(nums)
        dp, diff = 1, nums[0] - nums[1]
        for i in range(1, len(nums)):
            ndiff = nums[i] - nums[i - 1]
            if (diff == 0 and ndiff != 0) or (ndiff * diff < 0):
                dp += 1
                diff = ndiff
        return dp


# TESTS
for nums, expected in [
    ([3, 3, 3, 2, 5], 3),
    ([1], 1),
    ([1, 1], 1),
    ([2, 1], 2),
    ([1, 7, 4, 9, 2, 5], 6),
    ([1, 17, 5, 10, 13, 15, 10, 5, 16, 8], 7),
    ([1, 2, 3, 4, 5, 6, 7, 8, 9], 2),
]:
    sol = Solution()
    actual = sol.wiggleMaxLength(nums)
    print("The length of the longest wiggle sequence in", nums, "->", actual)
    assert actual == expected
