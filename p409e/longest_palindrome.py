from collections import Counter


class Solution:
    def longestPalindromeV1(self, s: str) -> int:
        l, odd = 0, 0
        for v in Counter(s).values():
            odd = odd | (v & 1)
            l += v & ~1  # equivalent to v // 2 * 2
        return l + odd

    def longestPalindromeV2(self, s):
        odds = sum(v & 1 for v in Counter(s).values())
        return len(s) - odds + bool(odds)


# TESTS
tests = [
    ("a", 1),
    ("abc", 1),
    ("aa", 2),
    ("aabb", 4),
    ("abbc", 3),
    ("abccccdd", 7),
]
for t in tests:
    sol = Solution()
    actual = sol.longestPalindromeV1(t[0])
    print("The length of longest palindrome built with", t[0], "->", actual)
    assert actual == t[1]
    assert t[1] == sol.longestPalindromeV2(t[0])
