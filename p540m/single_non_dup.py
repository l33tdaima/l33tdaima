from typing import List


class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            m = (l + r) // 2
            if nums[m - 1] != nums[m] != nums[m + 1]:
                return nums[m]
            elif nums[m] != nums[m + 1]:  # split between m and m + 1
                if (m + 1 - l) % 2 == 0:  # even on left
                    l = m + 1
                else:  # odd on left
                    r = m
            else:  # split between m - 1 and m
                if (r + 1 - m) % 2 == 0:  # even on right
                    r = m - 1
                else:  # odd on right
                    l = m
        return nums[l]


# TESTS
for nums, expected in [
    ([1, 1, 2], 2),
    ([1, 2, 2, 3, 3], 1),
    ([2, 2, 3, 5, 5], 3),
    ([2, 2, 3, 3, 5], 5),
    ([1, 1, 2, 3, 3, 4, 4, 8, 8], 2),
    ([3, 3, 7, 7, 10, 11, 11], 10),
]:
    sol = Solution()
    actual = sol.singleNonDuplicate(nums)
    print("The single non-duplicate in", nums, "->", actual)
    assert actual == expected
