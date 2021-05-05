from typing import List


class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        xs, ys = nums[:], nums[:]
        for i in range(len(nums) - 1):
            if nums[i] > nums[i + 1]:
                xs[i] = nums[i + 1]
                ys[i + 1] = nums[i]
                break
        return xs == sorted(xs) or ys == sorted(ys)


# TESTS
for nums, expected in [
    ([4, 2, 3], True),
    ([4, 2, 1], False),
    ([3, 4, 2, 3], False),
]:
    sol = Solution()
    actual = sol.checkPossibility(nums)
    print(nums, "could become non-decreasing by 1 modification ->", actual)
    assert actual == expected
