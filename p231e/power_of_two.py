class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and n - (n & -n) == 0


# TESTS
for n, expected in [
    (0, False),
    (1, True),
    (2, True),
    (5, False),
    (10, False),
    (16, True),
    (218, False),
]:
    sol = Solution()
    actual = sol.isPowerOfTwo(n)
    print("Is", n, "power of two? ->", actual)
    assert actual == expected
