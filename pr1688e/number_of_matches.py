class Solution:
    def numberOfMatches(self, n: int) -> int:
        ans = 0
        while n > 1:
            if n & 1 == 0:
                ans, n = ans + n // 2, n // 2
            else:
                ans, n = ans + (n - 1) // 2, (n - 1) // 2 + 1
        return ans

    def numberOfMatchesV2(self, n: int) -> int:
        return n - 1


# TESTS
for n, expected in [(7, 6), (14, 13)]:
    sol = Solution()
    actual = sol.numberOfMatches(n)
    print("Number of matched played in", n, "teams ->", actual)
    assert actual == expected
