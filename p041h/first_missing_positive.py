from typing import List


class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        for i, _ in enumerate(nums):
            while 0 < nums[i] <= len(nums) and nums[nums[i] - 1] != nums[i]:
                n = nums[i]
                nums[i], nums[n - 1] = nums[n - 1], nums[i]
        for i, n in enumerate(nums):
            if n != i + 1:
                return i + 1
        return len(nums) + 1


# TESTS
tests = [
    ([], 1),
    ([3, 1, 2], 4),
    ([1, 2, 0], 3),
    ([3, 4, -1, 1], 2),
    ([7, 8, 9, 11, 12], 1),
]
for nums, expected in tests:
    sol = Solution()
    actual = sol.firstMissingPositive(list(nums))
    print("The smallest missing positive in", nums, "->", actual)
    assert actual == expected
