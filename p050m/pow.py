import math


class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1
        if n == 1:
            return x
        if n < 0:
            return 1 / self.myPow(x, -n)
        if n % 2 == 0:
            return self.myPow(x * x, n // 2)
        else:
            return x * self.myPow(x * x, n // 2)


# TESTS
tests = [[2.0, 10], [2.1, 3], [2.0, -2], [0, 5], [1, 100], [23.123, 9]]
for t in tests:
    sol = Solution()
    actual = sol.myPow(t[0], t[1])
    print(f"Pow({t[0]}, {t[1]}) = {actual}")
    assert math.isclose(actual, pow(t[0], t[1]), rel_tol=1e-6)
