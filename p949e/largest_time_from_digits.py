from typing import List
import itertools

class Solution:
    def largestTimeFromDigits(self, A: List[int]) -> str:
        return max(["%d%d:%d%d" % t for t in itertools.permutations(A) if t[:2] < (2, 4) and t[2] < 6] or [""])

tests = [
    ([1,2,3,4], "23:41"),
    ([5,1,0,1], "15:10"),
    ([5,5,5,5], "")
]

for input, expected in tests:
    sol = Solution()
    actual = sol.largestTimeFromDigits(input)
    print("Largest time from digits", input, "->", actual)
    