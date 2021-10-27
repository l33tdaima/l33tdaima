from typing import List


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # invariant begin1 and end1 is the index of the first and last 1's
        i, first1, last1 = 0, 0, len(nums) - 1
        while i <= last1:
            if nums[i] == 0:
                nums[first1], nums[i] = nums[i], nums[first1]
                first1 += 1
                i += 1
            elif nums[i] == 2:
                nums[i], nums[last1] = nums[last1], nums[i]
                last1 -= 1
            else:
                i += 1


# TESTS
for nums in [
    [],
    [1, 0],
    [2, 1],
    [2, 0, 1],
    [0, 0, 0],
    [1, 1, 1],
    [2, 2, 2],
    [2, 1, 0, 2, 1, 0],
    [2, 2, 2, 1, 1, 0, 0, 0],
]:
    sol = Solution()
    sol.sortColors(nums)
    print("Sort colors ->", nums)
