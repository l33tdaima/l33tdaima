from math import sqrt


class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 2:
            return 0
        is_prime = [0, 0] + [1] * (n - 2)
        for i in range(2, int(n ** 0.5) + 1):
            if is_prime[i]:
                is_prime[i * i : n : i] = [0] * len(is_prime[i * i : n : i])
        return sum(is_prime)


# TESTS
for n, expected in [
    [0, 0],
    [3, 1],
    [4, 2],
    [5, 2],
    [6, 3],
    [7, 3],
    [8, 4],
    [10, 4],
    [15, 6],
    [300, 62],
    [1000, 168],
    [5000, 669],
]:
    sol = Solution()
    actual = sol.countPrimes(n)
    print("# of primes less than", n, "->", actual)
    assert actual == expected
