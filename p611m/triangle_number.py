from typing import List


class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        ans = 0
        nums.sort()
        for k in range(2, len(nums))[::-1]:
            i, j = 0, k - 1
            while i < j:
                if nums[i] + nums[j] > nums[k]:
                    ans += j - i
                    j -= 1
                else:
                    i += 1
        return ans


# TESTS
for nums, expected in [
    ([2, 2, 3, 4], 3),
    ([4, 2, 3, 4], 4),
    ([3, 19, 22, 24, 35, 82, 84], 10),
]:
    sol = Solution()
    actual = sol.triangleNumber(nums)
    print("# of triangle numbers in", nums, "->", actual)
    assert actual == expected

