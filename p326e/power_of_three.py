from math import log10


class Solution:
    def isPowerOfThreeV1(self, n: int) -> bool:
        if n > 1:
            while n % 3 == 0:
                n /= 3
        return n == 1

    def isPowerOfThreeV2(self, n: int) -> bool:
        max_pow_of_3 = 1162261467  # int(pow(3, int(log10(0x7FFFFFFF) / log10(3))))
        return n > 0 and max_pow_of_3 % n == 0


# TESTS
for n, expected in [
    (27, True),
    (0, False),
    (9, True),
    (45, False),
    (1, True),
]:
    sol = Solution()
    assert sol.isPowerOfThreeV1(n) == expected
    assert sol.isPowerOfThreeV2(n) == expected
