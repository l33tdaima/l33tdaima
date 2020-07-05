class Solution:
    def nthUglyNumber(self, n: int) -> int:
        ugly = [1]
        i2, i3, i5 = 0, 0, 0
        for _ in range(1, n):
            ugly.append(min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5))
            if ugly[-1] % 2 == 0:
                i2 += 1
            if ugly[-1] % 3 == 0:
                i3 += 1
            if ugly[-1] % 5 == 0:
                i5 += 1
        return ugly[n - 1]


# TESTS
tests = [
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 8),
    (8, 9),
    (9, 10),
    (10, 12),
]
for t in tests:
    sol = Solution()
    actual = sol.nthUglyNumber(t[0])
    print(f"The {t[0]}th ugly number ->", actual)
    assert actual == t[1]
