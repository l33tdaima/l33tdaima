class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        return s in (s + s)[1:-1]


# TESTS
tests = [
    ("abab", True),
    ("aba", False),
    ("abcabcabcabc", True),
    ("abcabc", True),
    ("abcab", False),
    ("zzzzzz", True),
    ("bb", True),
]
for s, expected in tests:
    sol = Solution()
    actual = sol.repeatedSubstringPattern(s)
    print("Repeated substring pattern in", s, "->", actual)
    assert actual == expected
