from typing import List


class Solution:
    def maxSubarraySumCircular(self, A: List[int]) -> int:
        total, dp_max_sum, dp_min_sum = 0, 0, 0
        max_sum, min_sum = -30000, 30000
        for a in A:
            total += a
            dp_max_sum = max(dp_max_sum + a, a)
            max_sum = max(max_sum, dp_max_sum)
            dp_min_sum = min(dp_min_sum + a, a)
            min_sum = min(min_sum, dp_min_sum)
        return max(max_sum, total - min_sum) if max_sum > 0 else max_sum


# TESTS
tests = [
    ([1, -2, 3, -2], 3),
    ([5, -3, 5], 10),
    ([3, -1, 2, -1], 4),
    ([3, -2, 2, -3], 3),
    ([-2, -3, -1], -1),
]
for t in tests:
    sol = Solution()
    actual = sol.maxSubarraySumCircular(t[0])
    print("Max subarray sum in circular array", t[0], "->", actual)
    assert actual == t[1]
