class Solution:
    def minOperations(self, n: int) -> int:
        return n * n // 4


# TESTS
for n, expected in [(3, 2), (6, 9)]:
    sol = Solution()
    actual = sol.minOperations(n)
    assert actual == expected
