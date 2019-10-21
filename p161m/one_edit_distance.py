class Solution:
    def isOneEditDistance(self, s: str, t: str) -> bool:
        if len(s) < len(t):
            s, t = t, s
        if len(s) - len(t) > 1:
            return False
        i, j, edit_once = 0, 0, False
        while j < len(t):
            if s[i] != t[j]:
                if edit_once:
                    return False
                edit_once = True
                if len(s) > len(t):
                    j = j - 1
            i, j = i + 1, j + 1
        return edit_once or len(s) > len(t)


# TESTS
tests = [
    ["ab", "acdd", False],
    ["ab", "acd", False],
    ["cab", "ad", False],
    ["cat", "cut", True],
    ["cat", "cast", True],
    ["cat", "cats", True],
    ["cat", "at", True],
    ["cat", "dog", False],
    ["cat", "act", False],
    ["cat", "cats", True],
    ["cat", "cat", False],
]
for t in tests:
    sol = Solution()
    actual = sol.isOneEditDistance(t[0], t[1])
    print("Is", t[0], t[1], "one edit distance? ->", actual)
    assert actual == t[2]
