class Solution:
    def findLength(self, nums1: list[int], nums2: list[int]) -> int:
        M, N, ans = len(nums1), len(nums2), 0
        # dp[i][j] is that longest common prefix length for nums1[:i], nums2[:j]
        dp = [[0] * (N + 1) for _ in range(M + 1)]
        for i in range(M - 1, -1, -1):
            for j in range(N - 1, -1, -1):
                if nums1[i] == nums2[j]:
                    dp[i][j] = dp[i + 1][j + 1] + 1
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
