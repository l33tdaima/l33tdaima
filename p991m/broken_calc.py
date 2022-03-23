class Solution:
    def brokenCalc(self, startValue: int, target: int) -> int:
        ans = 0
        while startValue < target:
            if target % 2 == 0:
                target //= 2
            else:
                target += 1
            ans += 1
        return ans + startValue - target


# TESTS
for startValue, target, expected in [
    (2, 3, 2),
    (5, 8, 2),
    (3, 10, 3),
    (1024, 1, 1023),
    (1, 1000000000, 39),
]:
    sol = Solution()
    actual = sol.brokenCalc(startValue, target)
    print(
        "The minimum number of operations",
        startValue,
        "to",
        target,
        "->",
        actual,
    )
    assert actual == expected
