from functools import reduce


class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        func = lambda res, c: res[:-1] if c == "#" else res + [c]
        return reduce(func, s, []) == reduce(func, t, [])


# TESTS
for s, t, expected in [
    ("ab#c", "ad#c", True),
    ("ab##", "c#d#", True),
    ("a##c", "#a#c", True),
    ("a#c", "b", False),
]:
    sol = Solution()
    actual = sol.backspaceCompare(s, t)
    print("Backspace compare(", s, ",", t, ") ->", actual)
    assert actual == expected
