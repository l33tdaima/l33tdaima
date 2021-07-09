from typing import List


class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        M, N, ans = len(nums1), len(nums2), 0
        # dp[i][j] is that LCW for nums1[:i], nums2[:j]
        dp = [[0] * (N + 1) for _ in range(M + 1)]
        for i in range(1, M + 1):
            for j in range(1, N + 1):
                if nums1[i - 1] == nums2[j - 1]:
                    dp[i][j] = 1 + dp[i - 1][j - 1]
                    ans = max(dp[i][j], ans)
        return ans


# TESTS
for nums1, nums2, expected in [
    ([1, 2, 3, 2, 1], [3, 2, 1, 4, 7], 3),
    ([0, 0, 0, 0, 0], [0, 0, 0, 0, 0], 5),
]:
    sol = Solution()
    actual = sol.findLength(nums1, nums2)
    print("The longest common subarray in", nums1, nums2, "->", actual)
    assert actual == expected
