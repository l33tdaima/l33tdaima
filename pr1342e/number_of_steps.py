class Solution:
    def numberOfSteps(self, num: int) -> int:
        ans = 0
        while num > 0:
            if num & 1:
                num -= 1
            else:
                num >>= 1
            ans += 1
        return ans


# TESTS
for num, expected in [(14, 6), (8, 4), (123, 12), (0, 0)]:
    sol = Solution()
    actual = sol.numberOfSteps(num)
    print("The number of steps to reduce", num, "to zero ->", actual)
    assert actual == expected
