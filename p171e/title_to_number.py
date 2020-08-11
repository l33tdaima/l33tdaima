class Solution:
    def titleToNumber(self, s: str) -> int:
        ans = 0
        for c in s:
            ans = ans * 26 + ord(c) - ord("A") + 1
        return ans


# TESTS
tests = [
    ("A", 1),
    ("Z", 26),
    ("AA", 27),
    ("AB", 28),
    ("ZY", 701),
]
for t in tests:
    sol = Solution()
    actual = sol.titleToNumber(t[0])
    print("Column title of", t[0], "->", actual)
    assert actual == t[1]
