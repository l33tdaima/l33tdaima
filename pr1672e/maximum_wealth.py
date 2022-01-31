from cmath import exp
from curses.ascii import SO


class Solution:
    def maximumWealth(self, accounts: list[list[int]]) -> int:
        return max(sum(acct) for acct in accounts)


# TESTS
for accounts, expected in [
    ([[1, 2, 3], [3, 2, 1]], 6),
    ([[1, 5], [7, 3], [3, 5]], 10),
    ([[2, 8, 7], [7, 1, 3], [1, 9, 5]], 17),
]:
    sol = Solution()
    actual = sol.maximumWealth(accounts)
    print(
        "The wealth that the richest customer has in", accounts, "->", actual
    )
    assert actual == expected
