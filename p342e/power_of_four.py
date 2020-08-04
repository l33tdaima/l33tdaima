class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        # positive and power of 2 and 1 only on the odd bit
        return num > 0 and num & (num - 1) == 0 and (num & 0x55555555) != 0


# TESTS
tests = [
    (0, False),
    (1, True),
    (2, False),
    (5, False),
    (4, True),
    (16, True),
]
for t in tests:
    sol = Solution()
    actual = sol.isPowerOfFour(t[0])
    print("Is", t[0], "power of four ->", actual)
    assert actual == t[1]
