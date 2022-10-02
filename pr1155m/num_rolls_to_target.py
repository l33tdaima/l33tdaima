from functools import lru_cache


class Solution:
    def numRollsToTarget(self, n: int, k: int, target: int) -> int:
        @lru_cache(k * 1000, True)
        def dp(n: int, target: int) -> int:
            nonlocal k
            if n == 1:
                return 1 if 0 < target <= k else 0
            else:
                return sum(dp(n - 1, target - i) for i in range(1, k + 1)) % (
                    10 ** 9 + 7
                )

        return dp(n, target)


# TESTS
for n, k, target, expected in [
    (1, 6, 3, 1),
    (2, 6, 7, 6),
    (2, 6, 3, 2),
    (2, 6, 13, 0),
    (30, 30, 500, 222616187),
]:
    sol = Solution()
    actual = sol.numRollsToTarget(n, k, target)
    print(f"# of possible way n={n}, k={k}, target={target} ->", actual)
    assert actual == expected
