class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.rstrip().split(" ")[-1])


tests = [
    ("Hello World", 5),
    ("very nice ", 4),
    (" a", 1),
    (" cc dd   a   bb ", 2),
    ("", 0),
]
for s, expected in tests:
    sol = Solution()
    actual = sol.lengthOfLastWord(s)
    print("Length of last word in", s, "->", actual)
    assert actual == expected

