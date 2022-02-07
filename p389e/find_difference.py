from collections import Counter


class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        diff = Counter(t) - Counter(s)
        return list(diff.keys())[0]

    def findTheDifferenceXor(self, s: str, t: str) -> str:
        code = 0
        for ch in s + t:
            code ^= ord(ch)
        return chr(code)


# TESTS
for s, t, expected in [
    ("abcd", "abcde", "e"),
    ("abcd", "abcdd", "d"),
    ("aaaaa", "aaaaaa", "a"),
    ("aaaaa", "aabaaa", "b"),
]:
    sol = Solution()
    actual = sol.findTheDifference(s, t)
    print("The letter that was added in", t, "from", s, "->", actual)
    assert actual == expected
    assert expected == sol.findTheDifferenceXor(s, t)
