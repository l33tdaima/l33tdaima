class Solution:
    def isPowerOfTwoV1(self, n: int) -> bool:
        if n <= 0:
            return False
        n1 = 0
        while n != 0:
            n1 += 1 if n & 1 == 1 else 0
            if n1 > 1:
                return False
            n = n >> 1
        return n1 == 1

    def isPowerOfTwoV2(self, n: int) -> bool:
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
    actual = sol.isPowerOfTwoV1(t[0])
    print("Is", t[0], "power of two? ->", actual)
    assert actual == t[1]
    assert t[1] == sol.isPowerOfTwoV2(t[0])
