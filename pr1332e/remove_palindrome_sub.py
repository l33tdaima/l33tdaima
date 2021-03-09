class Solution:
    def removePalindromeSub(self, s: str) -> int:
        return 2 - (s == s[::-1]) - (s == "")


# TESTS
for s, expected in [("ababa", 1), ("abb", 2), ("baabb", 2), ("", 0)]:
    sol = Solution()
    actual = sol.removePalindromeSub(s)
    print("The minimum steps of removing palindrome subsequence in", s, "->", actual)
    assert actual == expected
