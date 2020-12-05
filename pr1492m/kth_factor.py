from math import sqrt


class Solution:
    def kthFactorV1(self, n: int, k: int) -> int:
        for f in range(1, n + 1):
            if n % f == 0:
                k -= 1
                if k == 0:
                    return f
        return -1

    def kthFactorV2(self, n: int, k: int) -> int:
        f1, f2 = [], []
        for f in range(1, int(sqrt(n)) + 1):
            if n % f == 0:
                f1.append(f)
                if f != n // f:
                    f2.append(n // f)
        factors = f1 + f2[::-1]
        return factors[k - 1] if k <= len(factors) else -1


# TESTS
for n, k, expected in [
    (12, 3, 3),
    (7, 2, 7),
    (4, 4, -1),
    (1, 1, 1),
    (24, 6, 8),
    (1000, 3, 4),
]:
    sol = Solution()
    actual = sol.kthFactorV2(n, k)
    print("The", k, "th factor in", n, "->", actual)
    assert expected == sol.kthFactorV1(n, k)
    assert actual == expected

