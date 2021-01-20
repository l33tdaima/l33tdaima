class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        max_start, max_len = n - 1, 1
        dp = [[False for _ in range(n)] for _ in range(n)]
        for i in range(n - 1, -1, -1):
            for j in range(i, n):
                dp[i][j] = s[i] == s[j] and (j - i < 3 or dp[i + 1][j - 1])
                if dp[i][j] and j - i + 1 > max_len:
                    max_start, max_len = i, j - i + 1
        return s[max_start : max_start + max_len]


# TESTS
for s, expected in [("babad", "aba"), ("cbbd", "bb"), ("a", "a"), ("ac", "c")]:
    sol = Solution()
    actual = sol.longestPalindrome(s)
    print(f"Longest palindrome of '{s}' -> {actual}")
    assert actual == expected
