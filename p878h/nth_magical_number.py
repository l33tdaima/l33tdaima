class Solution:
    def nthMagicalNumber(self, n: int, a: int, b: int) -> int:
        def gcd(a: int, b: int) -> int:
            while b:
                a, b = b, a % b
            return a

        l, r, lcm = 2, 10 ** 14, a * b // gcd(a, b)
        while l < r:
            m = (l + r) // 2
            if m // a + m // b - m // lcm < n:
                l = m + 1
            else:
                r = m
        return l % (10 ** 9 + 7)


# TESTS
for n, a, b, expected in [
    (1, 2, 3, 2),
    (4, 2, 3, 6),
    (5, 2, 4, 10),
    (3, 6, 4, 8),
    (136, 556, 584, 38920),
]:
    sol = Solution()
    actual = sol.nthMagicalNumber(n, a, b)
    print(f"The {n}th magical number of {a} and {b} ->", actual)
    assert actual == expected
