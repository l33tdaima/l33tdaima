from collections import Counter


class Solution:
    def smallestSubsequence(self, s: str) -> str:
        if s == "":
            return ""
        counter = Counter(s)
        pos = 0
        for i, c in enumerate(s):
            if c < s[pos]:
                pos = i
            counter[c] -= 1
            if counter[c] == 0:
                break
        return s[pos] + self.smallestSubsequence(s[pos + 1 :].replace(s[pos], ""))


# TESTS
tests = [
    ("a", "a"),
    ("bca", "bca"),
    ("abacb", "abc"),
    ("bcabc", "abc"),
    ("cbacdcbc", "acdb"),
]
for s, expected in tests:
    sol = Solution()
    actual = sol.smallestSubsequence(s)
    print("Removing duplicates in", s, "->", actual)
    assert actual == expected
