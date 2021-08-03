from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = dict()
        for i, n in enumerate(nums):
            if target - n in seen:
                return [seen[target - n], i]
            else:
                seen[n] = i
        return [-1, -1]


# TESTS
for nums, target, expected in [
    ([2, 7, 11, 15], 9, [0, 1]),
    ([3, 2, 4], 6, [1, 2]),
    ([3, 3], 6, [0, 1]),
]:
    sol = Solution()
    actual = sol.twoSum(nums, target)
    print("Two sum in", nums, "for target", target, "->", actual)
    assert actual == expected
