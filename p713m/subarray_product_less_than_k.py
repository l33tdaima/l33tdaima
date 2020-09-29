from typing import List


class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 0:
            return 0
        l, r, prod, ans = 0, 0, 1, 0
        while r < len(nums):
            prod *= nums[r]
            while l <= r and prod >= k:
                prod /= nums[l]
                l += 1
            ans += r - l + 1
            r += 1
        return ans


# TESTS
tests = [
    ([10, 5, 2, 6], 0, 0),
    ([10, 5, 2, 6], 100, 8),
]
for nums, k, expected in tests:
    sol = Solution()
    actual = sol.numSubarrayProductLessThanK(nums, k)
    print("# of subarray in", nums, "with product less than", k, "->", actual)
    assert actual == expected
