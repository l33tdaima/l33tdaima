from typing import List


class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        even, odd, length = 0, 1, len(nums)
        while even < length and odd < length:
            if nums[even] % 2 == 0:
                even += 2
            elif nums[odd] % 2 != 0:
                odd += 2
            else:
                nums[even], nums[odd] = nums[odd], nums[even]
        return nums


# TESTS
for nums, expected in [
    ([1, 2], [2, 1]),
    ([4, 2, 5, 7], [4, 5, 2, 7]),
    ([2, 3], [2, 3]),
    ([3, 1, 2, 4], [4, 1, 2, 3]),
]:
    sol = Solution()
    actual = sol.sortArrayByParityII(nums)
    print("Sort", nums, "by parity ->", actual)
    assert actual == expected
