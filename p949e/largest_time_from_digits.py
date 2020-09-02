from typing import List
from itertools import permutations


class Solution:
    def largestTimeFromDigits(self, A: List[int]) -> str:
        return max(
            ["%d%d:%d%d" % a for a in permutations(A) if a[:2] < (2, 4) and a[2] < 6]
            or [""]
        )


tests = [
    ([1, 2, 3, 4], "23:41"),
    ([5, 1, 0, 1], "15:10"),
    ([5, 5, 5, 5], ""),
    ([5, 2, 1, 4], "21:54"),
]

for t, expected in tests:
    sol = Solution()
    actual = sol.largestTimeFromDigits(t)
    print("Largest time from digits", t, "->", actual)
    assert actual == expected
