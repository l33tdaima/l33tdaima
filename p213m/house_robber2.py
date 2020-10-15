from typing import List


class Solution:
    def rob(self, nums: List[int]) -> int:
        def helper(nums: List[int]) -> int:
            dp_1, dp_2 = 0, 0
            for n in nums:
                dp_1, dp_2 = max(dp_2 + n, dp_1), dp_1
            return dp_1

        if len(nums) == 1:
            return nums[0]
        return max(helper(nums[0:-1]), helper(nums[1:]))


# TESTS
tests = [
    ([2, 3, 2], 3),
    ([1, 2, 3, 1], 4),
    ([0], 0),
    ([1], 1),
    ([1, 2], 2),
    ([1, 5, 3], 5),
    ([5, 2, 2, 1], 7),
]
for nums, expected in tests:
    sol = Solution()
    actual = sol.rob(nums)
    print("The maximum amount of money you can rob from", nums, "->", actual)
    assert actual == expected
