class Solution:
    def findMaxK(self, nums: list[int]) -> int:
        seen = set(nums)
        ans = -1
        for k in nums:
            if k > 0 and -k in seen and k > ans:
                ans = k
        return ans


# TESTS
for nums, expected in [
    ([-1, 2, -3, 3], 3),
    ([-1, 10, 6, 7, -7, 1], 7),
    ([-10, 8, 6, 7, -2, -3], -1),
]:
    sol = Solution()
    actual = sol.findMaxK(nums)
    assert actual == expected
