from typing import List


class Solution:
    def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:
        n = str(n)
        N = len(n)
        ans = sum(len(digits) ** i for i in range(1, N))
        i = 0
        while i < len(n):
            ans += sum(c < n[i] for c in digits) * (len(digits) ** (N - 1 - i))
            if n[i] not in digits:
                break
            i += 1
        return ans + (i == N)


# TESTS
for digits, n, expected in [
    (["1", "3", "5", "7"], 100, 20),
    (["1", "4", "9"], 1000000000, 29523),
    (["7"], 8, 1),
]:
    sol = Solution()
    actual = sol.atMostNGivenDigitSet(digits, n)
    print("# of positive integers generated from", digits, "<=", n, "->", actual)
    assert actual == expected
