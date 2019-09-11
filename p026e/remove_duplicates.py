from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 0
        for i in range(len(nums)):
            if nums[k] < nums[i]:
                k += 1
                nums[k] = nums[i]
        return k + 1 if len(nums) > 0 else 0


# TESTS
tests = [
    [[], 0],
    [[1], 1],
    [[1, 1, 1, 2, 2, 3], 3],
    [[0, 0, 1, 1, 1, 1, 2, 3, 3], 4],
    [[3, 3, 3, 4, 5, 6, 6, 7, 8, 9], 7],
]
for t in tests:
    sol = Solution()
    input = t[0]
    actual = sol.removeDuplicates(input)
    print(t[0], "remove duplicates ->", actual)
    assert actual == t[1]
