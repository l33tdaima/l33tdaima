from typing import List


class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        total = sum(nums)
        if len(nums) < k or total % k != 0:
            return False
        nums.sort(reverse=True)
        target = [total // k] * k

        def dfs(pos: int) -> bool:
            if pos == len(nums):
                return True
            for i in range(k):
                if target[i] >= nums[pos]:
                    target[i] -= nums[pos]
                    if dfs(pos + 1):
                        return True
                    target[i] += nums[pos]
            return False

        return dfs(0)


# TESTS
for nums, k, expected in [
    ([4, 3, 2, 3, 5, 2, 1], 4, True),
    ([1, 2, 3, 4], 3, False),
    ([1, 2, 3], 2, True),
]:
    sol = Solution()
    actual = sol.canPartitionKSubsets(nums, k)
    print("Can partition", nums, "into", k, "subsets of equal sum ->", actual)
    assert actual == expected
