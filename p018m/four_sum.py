from typing import List


class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        def twoSum(nums: List[int], target: int) -> List[List[int]]:
            ans, seen = [], set()
            for n in nums:
                if len(ans) == 0 or ans[-1][1] != n:
                    if target - n in seen:
                        ans.append([target - n, n])
                seen.add(n)
            return ans

        def kSum(nums: List[int], target: int, k: int) -> List[List[int]]:
            if len(nums) == 0 or nums[0] * k > target or nums[-1] * k < target:
                return []
            if k == 2:
                return twoSum(nums, target)
            ans = []
            for i in range(len(nums)):
                if i == 0 or nums[i - 1] != nums[i]:
                    for sol in kSum(nums[i + 1 :], target - nums[i], k - 1):
                        ans.append([nums[i]] + sol)
            return ans

        nums.sort()
        return kSum(nums, target, 4)


# TESTS
for nums, target, expected in [
    ([], 0, []),
    ([1, 0, -1, 0, -2, 2], 0, [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]),
    ([2, 2, 2, 2, 2], 8, [[2, 2, 2, 2]]),
]:
    sol = Solution()
    actual = sol.fourSum(nums, target)
    print("Four sum in", nums, ", target =", target, "->", actual)
    assert actual == expected
