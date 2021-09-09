from typing import List
from itertools import accumulate


class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        accu_shifts = list(map(lambda x: x % 26, list(accumulate(shifts[::-1]))[::-1]))
        return "".join(chr(97 + (ord(c) + d - 97) % 26) for c, d in zip(s, accu_shifts))


# TESTS
for s, shifts, expected in [
    ("abc", [3, 5, 9], "rpl"),
    ("aaa", [1, 2, 3], "gfd"),
    ("abcd", [26, 2990, 19910, 12909], "hijq"),
]:
    sol = Solution()
    actual = sol.shiftingLetters(s, shifts)
    print("Shift", s, "by", shifts, "->", actual)
    assert actual == expected
