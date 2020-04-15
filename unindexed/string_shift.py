from typing import List
from functools import reduce


class Solution:
    def stringShift(self, s: str, shift: List[List[int]]) -> str:
        # shift right is negative, shift left is positive
        netshift = reduce(
            lambda x, y: x - y[1] if y[0] else x + y[1], shift, 0
        ) % len(s)
        # or equivalently
        # netshift = sum([a, -a][d] for d, a in shift) % len(s)
        return s[netshift:] + s[:netshift]


# TESTS
tests = [
    ("abc", [[0, 1], [1, 2]], "cab"),
    ("abcdefg", [[1, 1], [1, 1], [0, 2], [1, 3]], "efgabcd"),
    ("abcdefg", [[1, 1], [1, 1], [0, 3], [1, 1]], "abcdefg"),
    (
        "xqgwkiqpif",
        [
            [1, 4],
            [0, 7],
            [0, 8],
            [0, 7],
            [0, 6],
            [1, 3],
            [0, 1],
            [1, 7],
            [0, 5],
            [0, 6],
        ],
        "qpifxqgwki",
    ),
]
for t in tests:
    sol = Solution()
    actual = sol.stringShift(t[0], t[1])
    print("Shift string '" + t[0] + "' by", t[1], "->", actual)
    assert actual == t[2]
