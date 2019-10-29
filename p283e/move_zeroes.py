from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        j = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[j] = nums[i]
                j = j + 1
        while j < len(nums):
            nums[j] = 0
            j = j + 1


# TESTS
tests = [[], [1, 2], [0, 1], [2, 0, 1], [0, 1, 0, 3, 12]]
for t in tests:
    sol = Solution()
    sol.moveZeroes(t)
    print("Move zeros ->", t)
