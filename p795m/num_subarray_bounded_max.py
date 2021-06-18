from typing import List


class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        ans, l, r = 0, -1, -1
        for i, n in enumerate(nums):
            if n > right:
                l = i
            if n >= left:
                r = i
            ans += r - l
        return ans


# TESTS
for nums, left, right, expected in [
    ([2, 1, 4, 3], 2, 3, 3),
    ([0, 3, 1, 4, 5, 2, 1, 5, 10, 6], 3, 6, 32),
]:
    sol = Solution()
    actual = sol.numSubarrayBoundedMax(nums, left, right)
    print("# of subarrays for", nums, left, right, "->", actual)
    assert actual == expected

