class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()[::-1]
        return " ".join(words)


# TESTS
tests = [
    ("the sky is blue", "blue is sky the"),
    ("  hello world!  ", "world! hello"),
    ("a good   example", "example good a"),
]
for t in tests:
    sol = Solution()
    actual = sol.reverseWords(t[0])
    print(f"Reverse words '{t[0]}' -> '{actual}'")
    assert actual == t[1]
