class Solution:
    def maxSubarraySumCircular(self, nums: list[int]) -> int:
        total, dp_max_sum, dp_min_sum = 0, 0, 0
        max_sum, min_sum = -30000, 30000
        for n in nums:
            total += n
            dp_max_sum = max(dp_max_sum + n, n)
            max_sum = max(max_sum, dp_max_sum)
            dp_min_sum = min(dp_min_sum + n, n)
            min_sum = min(min_sum, dp_min_sum)
        return max(max_sum, total - min_sum) if max_sum > 0 else max_sum


# TESTS
for nums, expected in [
    ([1, -2, 3, -2], 3),
    ([5, -3, 5], 10),
    ([3, -1, 2, -1], 4),
    ([3, -2, 2, -3], 3),
    ([-2, -3, -1], -1),
]:
    sol = Solution()
    actual = sol.maxSubarraySumCircular(nums)
    print("Max subarray sum in circular array", nums, "->", actual)
    assert actual == expected
