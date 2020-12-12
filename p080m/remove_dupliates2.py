from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 0
        for n in nums:
            if k < 2 or n != nums[k - 2]:
                nums[k] = n
                k += 1
        return k


# TESTS
for nums, expected in [
    ([], 0),
    ([1], 1),
    ([2, 2], 2),
    ([1, 1, 1, 2, 2, 3], 5),
    ([0, 0, 1, 1, 1, 1, 2, 3, 3], 7),
    ([3, 3, 3, 4, 5, 6, 6, 7, 8, 9], 9),
]:
    sol = Solution()
    copy = list(nums)
    actual = sol.removeDuplicates(nums)
    print("Remove duplidates from", copy, "->", nums[:actual])
    assert actual == expected
