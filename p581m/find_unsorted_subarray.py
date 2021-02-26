from typing import List


class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        sorted_nums = sorted(nums)
        left, right = 0, len(nums) - 1
        while left <= right:
            if nums[left] == sorted_nums[left]:
                left += 1
            elif nums[right] == sorted_nums[right]:
                right -= 1
            else:
                break
        return right - left + 1

    def findUnsortedSubarrayOpt(self, nums: List[int]) -> int:
        maxv, minv = nums[0], nums[-1]
        left, right = 0, -1
        n = len(nums)
        for i in range(n):
            maxv = max(maxv, nums[i])
            minv = min(minv, nums[-i - 1])
            if nums[i] < maxv:
                right = i
            if nums[-i - 1] > minv:
                left = n - i - 1
        return right - left + 1


for nums, expected in [
    ([2, 6, 4, 8, 10, 9, 15], 5),
    ([1, 2, 3, 4], 0),
    ([1], 0),
    ([2, 3, 2], 2),
]:
    sol = Solution()
    actual = sol.findUnsortedSubarray(nums)
    print("Shortest subarray length to sort in", nums, "->", actual)
    assert actual == expected
    assert expected == sol.findUnsortedSubarrayOpt(nums)
