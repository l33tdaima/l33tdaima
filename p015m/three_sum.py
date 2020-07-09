from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        ans = []
        nums.sort()
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            lo, hi = i + 1, len(nums) - 1
            while lo < hi:
                if nums[i] + nums[lo] + nums[hi] == 0:
                    ans.append([nums[i], nums[lo], nums[hi]])
                    while lo < hi and nums[lo] == nums[lo + 1]:
                        lo += 1
                    while lo < hi and nums[hi] == nums[hi - 1]:
                        hi -= 1
                    lo, hi = lo + 1, hi - 1
                elif nums[i] + nums[lo] + nums[hi] < 0:
                    lo += 1
                else:
                    hi -= 1
        return ans


# TEST
tests = [
    [0],
    [0, 0, 0],
    [0, 1, -1, -1, 0, 1, 2, -1, -4],
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
]
for t in tests:
    print("Solutions of 3 sum for", t, "->")
    sol = Solution()
    actual = sol.threeSum(t)
    for i, v in enumerate(actual):
        print("  ", i, ": ", v)

