class Solution:
    def minimumAverageDifference(self, nums: list[int]) -> int:
        sfront, send, ans, diff, n = 0, sum(nums), 0, float("Inf"), len(nums)
        for i in range(n):
            sfront += nums[i]
            send -= nums[i]

            avg1 = send // (n - 1 - i) if i != n - 1 else 0
            avg2 = sfront // (i + 1)

            if abs(avg1 - avg2) < diff:
                diff = abs(avg1 - avg2)
                ans = i
        return ans


# TESTS
for nums, expected in [
    ([2, 5, 3, 9, 5, 3], 3),
    ([0], 0),
]:
    sol = Solution()
    actual = sol.minimumAverageDifference(nums)
    print(
        "The index with the minimum average difference in", nums, "->", actual
    )
    assert actual == expected
