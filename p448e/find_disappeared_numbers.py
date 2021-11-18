from typing import List


class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        for n in nums:
            i = abs(n) - 1
            nums[i] = -nums[i] if nums[i] > 0 else nums[i]
        return [i + 1 for i, n in enumerate(nums) if n > 0]


for nums, expected in [
    ([4, 3, 2, 7, 8, 2, 3, 1], [5, 6]),
    ([1, 1], [2]),
    ([4, 3, 2, 1], []),
]:
    sol = Solution()
    actual = sol.findDisappearedNumbers(list(nums))
    print("All numbers disappeared in", nums, "->", actual)
    assert actual == expected
