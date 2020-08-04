class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and (n & (n - 1)) == 0


# TESTS
tests = [
    (0, False),
    (1, True),
    (2, True),
    (5, False),
    (10, False),
    (16, True),
    (218, False),
]
for t in tests:
    sol = Solution()
    actual = sol.isPowerOfTwo(t[0])
    print("Is", t[0], "power of two? ->", actual)
    assert actual == t[1]
