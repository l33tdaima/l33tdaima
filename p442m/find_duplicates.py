from typing import List


class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        ans = []
        for n in nums:
            a = abs(n)
            if nums[a - 1] < 0:
                ans.append(a)
            else:
                nums[a - 1] *= -1
        return ans


# TESTS
for nums, expected in [
    ([4, 3, 2, 7, 8, 2, 3, 1], [2, 3]),
    ([1, 1, 2], [1]),
    ([1], []),
]:
    sol = Solution()
    actual = sol.findDuplicates(nums)
    print("Find duplicates in", nums, "->", actual)
    assert sorted(actual) == sorted(expected)
