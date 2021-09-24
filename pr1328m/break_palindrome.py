from typing import List


class Solution:
    def breakPalindromeV1(self, palindrome: str) -> str:
        def generator(s: List[str]):
            i, c = 0, "a"
            while i < len(s):
                if (i < len(s) - 1 and c == s[i]) or c == "z":
                    i += 1
                    c = "a"
                else:
                    yield s[:i] + [c] + s[i + 1 :]
                    c = chr(ord(c) + 1)

        for t in generator(list(palindrome)):
            if t == t[::-1]:
                continue
            else:
                return "".join(t)
        return ""

    def breakPalindromeV2(self, palindrome: str) -> str:
        for i in range(len(palindrome) // 2):
            if palindrome[i] != "a":
                return palindrome[:i] + "a" + palindrome[i + 1 :]
        return palindrome[:-1] + "b" if palindrome[:-1] else ""


# TESTS
for palindrome, expected in [
    ("abccba", "aaccba"),
    ("a", ""),
    ("aa", "ab"),
    ("aba", "abb"),
    ("zzzz", "azzz"),
    ("bzzb", "azzb"),
]:
    sol = Solution()
    actual = sol.breakPalindromeV2(palindrome)
    print("The lexicographically smallest non-palindrome of", palindrome, "->", actual)
    assert actual == expected
    assert sol.breakPalindromeV1(palindrome) == expected
