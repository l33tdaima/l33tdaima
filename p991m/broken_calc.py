class Solution:
    def brokenCalc(self, X: int, Y: int) -> int:
        ans = 0
        while X < Y:
            if Y % 2 == 0:
                Y //= 2
            else:
                Y += 1
            ans += 1
        return ans + X - Y


# TESTS
for X, Y, expected in [
    (2, 3, 2),
    (5, 8, 2),
    (3, 10, 3),
    (1024, 1, 1023),
    (1, 1000000000, 39),
]:
    sol = Solution()
    actual = sol.brokenCalc(X, Y)
    print("The minimum number of operations", X, "to", Y, "->", actual)
    assert actual == expected
