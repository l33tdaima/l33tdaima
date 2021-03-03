from typing import List


class Solution:
    def findErrorNumsON(self, nums: List[int]) -> List[int]:
        memo = set()
        dup, missing = -1, -1
        for n in nums:
            if n in memo:
                dup = n
            else:
                memo.add(n)
        for n in range(1, len(nums) + 1):
            if n not in memo:
                missing = n
        return [dup, missing]

    def findErrorNumsO1(self, nums: List[int]) -> List[int]:
        dup, missing = -1, -1
        for n in nums:
            i = abs(n) - 1
            if nums[i] < 0:
                dup = abs(n)
            else:
                nums[i] *= -1
        for i in range(len(nums)):
            if nums[i] > 0:
                missing = i + 1
        return [dup, missing]


# TESTS
for nums, expected in [
    ([1, 2, 2, 4], [2, 3]),
    ([1, 5, 2, 5, 3], [5, 4]),
    ([5, 7, 6, 1, 2, 2, 4], [2, 3]),
]:
    sol = Solution()
    actual = sol.findErrorNumsON(nums)
    print("Dup and missing in", nums, "->", actual)
    assert actual == expected
    assert expected == sol.findErrorNumsO1(nums)
