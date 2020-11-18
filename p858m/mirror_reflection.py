class Solution:
    def mirrorReflection(self, p: int, q: int) -> int:
        m, n = q, p
        while m % 2 == 0 and n % 2 == 0:
            m, n = m / 2, n / 2
        if n % 2 == 0 and m % 2 == 1:  # receive at left side if n is even
            return 2
        # receive at right side: 0, or 1
        if n % 2 == 1 and m % 2 == 0:
            return 0
        if n % 2 == 1 and m % 2 == 1:
            return 1
        return -1


# TESTS
for p, q, expected in [
    (2, 0, 0),
    (2, 2, 1),
    (2, 1, 2),
    (4, 1, 2),
    (3, 1, 1),
    (3, 2, 0),
    (5, 1, 1),
]:
    sol = Solution()
    actual = sol.mirrorReflection(p, q)
    print("The receptor that the ray meets first p =", p, ", q =", q, "->", actual)
    assert actual == expected
