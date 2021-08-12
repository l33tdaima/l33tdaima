from typing import Iterator

"""
08/11/2021 Google Phone Interview

s1 and s2 are two streams of digits representing two unknown length of large numbers.
Write a function to compare these two numbers
"""


class Solution:
    def compareDigitsStream(self, s1: Iterator, s2: Iterator) -> int:
        while c1 := next(s1, None) == "0":
            pass
        while c2 := next(s2, None) == "0":
            pass
        digit_comp = 0
        for c1, c2 in zip(s1, s2):
            if digit_comp == 0:
                digit_comp = int(c1) - int(c2)
        c1, c2 = next(s1, None), next(s2, None)
        if not c1 and not c2:
            return digit_comp // abs(digit_comp) if digit_comp != 0 else 0
        elif not c1:
            return -1
        else:
            return 1


# TESTS
for s1, s2, expected in [
    ("123", "456", -1),
    ("00123", "0123", 0),
    ("", "", 0),
    ("1234", "9", 1),
    ("1234", "98765", -1),
]:
    sol = Solution()
    actual = sol.compareDigitsStream(iter(s1), iter(s2))
    print("Compare", s1, s2, "->", actual)
    assert actual == expected
