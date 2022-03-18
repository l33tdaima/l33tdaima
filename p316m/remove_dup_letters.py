from collections import Counter


class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
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
        return s[pos] + self.removeDuplicateLetters(
            s[pos + 1 :].replace(s[pos], "")
        )


# TESTS
for s, expected in [
    ("a", "a"),
    ("bca", "bca"),
    ("abacb", "abc"),
    ("bcabc", "abc"),
    ("cbacdcbc", "acdb"),
]:
    sol = Solution()
    actual = sol.removeDuplicateLetters(s)
    print("Removing duplicates in", s, "->", actual)
    assert actual == expected
