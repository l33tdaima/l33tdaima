from functools import reduce


class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        func = lambda res, c: res[:-1] if c == "#" else res + [c]
        return reduce(func, S, []) == reduce(func, T, [])


# TESTS
tests = [
    ("ab#c", "ad#c", True),
    ("ab##", "c#d#", True),
    ("a##c", "#a#c", True),
    ("a#c", "b", False),
]
for t in tests:
    sol = Solution()
    actual = sol.backspaceCompare(t[0], t[1])
    print("Backspace compare(", t[0], ",", t[1], ") ->", actual)
    assert actual == t[2]
