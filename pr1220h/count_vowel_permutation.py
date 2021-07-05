class Solution:
    def countVowelPermutation(self, n: int) -> int:
        a, e, i, o, u = 1, 1, 1, 1, 1
        for _ in range(n - 1):
            a, e, i, o, u = e + i + u, a + i, e + o, i, i + o
        return (a + e + i + o + u) % (10 ** 9 + 7)


# TESTS
for n, expected in [
    (1, 5),
    (2, 10),
    (5, 68),
]:
    sol = Solution()
    actual = sol.countVowelPermutation(n)
    assert actual == expected

