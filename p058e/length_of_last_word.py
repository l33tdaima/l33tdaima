class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        len = 0
        for c in s.rstrip()[::-1]:
            if c == ' ':
                break
            else:
                len += 1
        return len

tests = [
    ("Hello World", 5),
    ("nice", 4),
    ("", 0)
]
for t in tests:
    sol = Solution()
    act = sol.lengthOfLastWord(t[0])
    print("Length of last word in", t[0], "->", act)
    assert(act == t[1])
        