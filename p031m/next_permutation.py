from typing import List


class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = len(nums) - 1
        while i >= 1 and nums[i - 1] >= nums[i]:
            i -= 1
        j = len(nums) - 1
        if i > 0:
            while nums[i - 1] >= nums[j]:
                j -= 1
            nums[i - 1], nums[j] = nums[j], nums[i - 1]
        j = len(nums) - 1
        while i < j:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1


# TESTS
tests = [
    ([1, 3, 2], [2, 1, 3]),
    ([1, 2, 3], [1, 3, 2]),
    ([9, 1, 1], [1, 1, 9]),
    ([2, 3, 4, 1], [2, 4, 1, 3]),
    ([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
    ([1, 5, 8, 4, 7, 6, 5, 3, 2, 1], [1, 5, 8, 5, 1, 2, 3, 4, 6, 7]),
]
for t in tests:
    sol = Solution()
    print("Next permutation of", t[0], "->", t[1])
    sol.nextPermutation(t[0])
    assert t[0] == t[1]
