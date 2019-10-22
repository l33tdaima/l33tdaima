from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ans, prod = len(nums) * [1], 1
        for i in range(len(nums)):
            ans[i] = prod
            prod = prod * nums[i]
        prod = 1
        for i in reversed(range(len(nums))):
            ans[i] = ans[i] * prod
            prod = prod * nums[i]
        return ans


tests = [[1, 2], [2, 3, 4], [1, 2, 3, 4]]
for t in tests:
    sol = Solution()
    print("Product array except itself ->", sol.productExceptSelf(t))
