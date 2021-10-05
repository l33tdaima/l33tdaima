class Solution:
    def climbStairs(self, n: int) -> int:
        a, b = 1, 1
        for _ in range(1, n):
            a, b = b, a + b
        return b


# TESTS
for n, expected in [
    (2, 2),
    (3, 3),
    (20, 10946),
]:
    sol = Solution()
    actual = sol.climbStairs(n)
    print("The ways to climb", n, "stairs ->", actual)
    assert actual == expected
