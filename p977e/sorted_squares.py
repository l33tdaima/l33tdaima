from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        sq, l, r = [], 0, len(nums) - 1
        while l <= r:
            if abs(nums[l]) <= abs(nums[r]):
                sq.append(nums[r] * nums[r])
                r -= 1
            else:
                sq.append(nums[l] * nums[l])
                l += 1
        return sq[::-1]


# TESTS
for nums, expected in [
    ([-4, -1, 0, 3, 10], [0, 1, 9, 16, 100]),
    ([-7, -3, 2, 3, 11], [4, 9, 9, 49, 121]),
]:
    sol = Solution()
    actual = sol.sortedSquares(nums)
    print("Sorted squares of", nums, "->", actual)
    assert actual == expected
