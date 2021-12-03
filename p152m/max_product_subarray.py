from typing import List


class Solution:
    def maxProductV1(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        ans, prod = float("-Inf"), 1
        for n in nums:
            prod *= n
            ans = max(ans, prod)
            if prod == 0:
                prod = 1
        prod = 1
        for n in nums[::-1]:
            prod *= n
            ans = max(ans, prod)
            if prod == 0:
                prod = 1
        return ans

    def maxProductV2(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        prod_fwd, prod_back = nums, nums[::-1]
        for i in range(1, len(nums)):
            prod_fwd[i] *= prod_fwd[i - 1] or 1
            prod_back[i] *= prod_back[i - 1] or 1
        return max(prod_fwd + prod_back)


# TESTS
for nums, expected in [
    ([2, 3, -2, 4], 6),
    ([-2, 0, -1], 0),
    ([], 0),
    ([1], 1),
    ([-2], -2),
    ([1, -2], 1),
    ([-1, -3], 3),
    ([3, -1, 4], 4),
    ([3, -1, 2, 6], 12),
    ([-2, -3, 0, -4], 6),
    ([-2, 1, -3, -4], 12),
    ([-2, 1, -3, 1, -4], 12),
    ([-2, 1, -3, 1, -4, -2], 48),
    ([-2, 1, -3, 1, -4, -2, 0, 49], 49),
]:
    sol = Solution()
    actual = sol.maxProductV1(nums)
    print("Max subarray product of", nums, "->", actual)
    assert actual == expected
    assert expected == sol.maxProductV2(nums)
