class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        max_start, max_len = n - 1, 1
        state = [[False for _ in range(n)] for _ in range(n)]
        for i in range(n - 1, -1, -1):
            for j in range(i, n):
                if i == j:
                    state[i][j] = True
                elif i + 1 == j:
                    state[i][j] = s[i] == s[j]
                else:
                    state[i][j] = state[i + 1][j - 1] and s[i] == s[j]
                if state[i][j] and j - i + 1 > max_len:
                    max_start, max_len = i, j - i + 1
        return s[max_start : max_start + max_len]


# TESTS
tests = ["cbbd", "babad"]
for t in tests:
    sol = Solution()
    print(f"Longest palindrome of '{t}' -> {sol.longestPalindrome(t)}")

