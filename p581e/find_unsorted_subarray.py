from typing import List

class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        if (len(nums) == 0):
            return 0
        sorted = list(nums)
        sorted.sort()
        left, right = 0, len(nums) - 1
        while left <= right:
            if nums[left] == sorted[left]:
                left += 1
            elif nums[right] == sorted[right]:
                right -= 1
            else:
                break
        return right - left + 1
    
    def findUnsortedSubarrayOpt(self, nums: List[int]) -> int:
        if (len(nums) == 0):
            return 0
        maxv, minv = nums[0], nums[-1]
        left, right = 0, -1
        n = len(nums)
        for i in range(n):
            maxv = max(maxv, nums[i])
            minv = min(minv, nums[-i-1])
            if nums[i] < maxv:
                right = i
            if nums[-i - 1] > minv:
                left = n - i - 1
        return right - left + 1

tests = [
    ([], 0),
    ([1, 2, 3], 0),
    ([2, 3, 2], 2),
    ([2, 6, 4, 8, 10, 9, 15], 5)
]

for t in tests:
    sol = Solution()
    actual = sol.findUnsortedSubarray(t[0])
    print("Shortest subarray length in", t, "->", actual)
    assert(actual == t[1])
    assert(t[1] == sol.findUnsortedSubarrayOpt(t[0]))
