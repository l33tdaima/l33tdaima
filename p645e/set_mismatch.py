from typing import List


class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
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
                nums[i] = -nums[i]
        for i in range(len(nums)):
            if nums[i] > 0:
                missing = i + 1
        return [dup, missing]


# TESTS
tests = [
    ([1, 2, 2, 4], [2, 3]),
    ([1, 5, 2, 5, 3], [5, 4]),
    ([5, 7, 6, 1, 2, 2, 4], [2, 3]),
]
for t in tests:
    sol = Solution()
    actual1 = sol.findErrorNums(t[0])
    print("Dup and missing in", t[0], "->", actual1)
    actual2 = sol.findErrorNumsO1(t[0])
    assert actual1 == t[1]
    assert t[1] == actual2
