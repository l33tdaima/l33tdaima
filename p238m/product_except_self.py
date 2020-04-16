from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ans = [1] * len(nums)
        left, right = 1, 1
        for i in range(len(nums)):
            ans[i] *= left
            left *= nums[i]
            ans[-1 - i] *= right
            right *= nums[-1 - i]
        return ans


tests = [[0, 0], [1, 2], [2, 3, 4], [1, 2, 3, 4]]
for t in tests:
    sol = Solution()
    print("Product array except itself ->", sol.productExceptSelf(t))
