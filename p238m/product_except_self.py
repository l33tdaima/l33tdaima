from typing import List


class Solution:
    def productExceptSelfON(self, nums: List[int]) -> List[int]:
        lprod, rprod = [1], [1]
        for n in nums[:-1]:
            lprod.append(lprod[-1] * n)
        for n in nums[1:][::-1]:
            rprod.append(rprod[-1] * n)
        return [x * y for x, y in zip(lprod, rprod[::-1])]

    def productExceptSelfO1(self, nums: List[int]) -> List[int]:
        ans = [1] * len(nums)
        left, right = 1, 1
        for i in range(len(nums)):
            ans[i] *= left
            left *= nums[i]
            ans[-1 - i] *= right
            right *= nums[-1 - i]
        return ans


for nums, expected in [
    ([1, 2, 3, 4], [24, 12, 8, 6]),
    ([-1, 1, 0, -3, 3], [0, 0, 9, 0, 0]),
]:
    sol = Solution()
    actual = sol.productExceptSelfO1(nums)
    print("Product array except itself in", nums, "->", actual)
    assert actual == expected
    assert expected == sol.productExceptSelfON(nums)
