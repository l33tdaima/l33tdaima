class Solution:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        fib = (0, 1)
        for n in range(2, n + 1):
            fib = fib[1], fib[0] + fib[1]
        return fib[1]


# TESTS
for n, expected in [
    (0, 0),
    (1, 1),
    (2, 1),
    (3, 2),
    (4, 3),
    (10, 55),
    (15, 610),
    (30, 832040),
]:
    sol = Solution()
    actual = sol.fib(n)
    print(f"F({n}) = {actual}")
    assert actual == expected
