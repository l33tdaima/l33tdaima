from unicodedata import name


class Solution:
    def countOrders(self, n: int) -> int:
        ans, MOD = 1, 10 ** 9 + 7
        for i in range(2, n + 1):
            ans = ans * (i * 2 - 1) * i % MOD
        return ans


# TESTS
for n, expected in [
    (1, 1),
    (2, 6),
    (3, 90),
]:
    sol = Solution()
    actual = sol.countOrders(n)
    print("All valid pickup/delivery for n =", n, "->", actual)
    assert actual == expected
