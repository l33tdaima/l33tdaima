class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n == 0:
            return 0
        nums = [0] * (n + 2)
        nums[1] = 1
        for i in range(1, n // 2 + 1):
            nums[2 * i] = nums[i]
            nums[2 * i + 1] = nums[i] + nums[i + 1]
        return max(nums[1 : n + 1])


# TESTS
for n, expected in [
    (0, 0),
    (1, 1),
    (2, 1),
    (3, 2),
    (7, 3),
]:
    sol = Solution()
    actual = sol.getMaximumGenerated(n)
    print("The maximum of generated array of", n, "->", actual)
    assert actual == expected
