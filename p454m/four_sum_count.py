from typing import List
from collections import Counter


class Solution:
    def fourSumCount(
        self, A: List[int], B: List[int], C: List[int], D: List[int]
    ) -> int:
        AB = Counter(a + b for a in A for b in B)
        return sum(AB[-c - d] for c in C for d in D)


# TESTS
for A, B, C, D, expected in [
    ([1, 2], [-2, -1], [-1, 2], [0, 2], 2),
]:
    sol = Solution()
    actual = sol.fourSumCount(A, B, C, D)
    print("Four sums to zero in", A, B, C, D, "->", actual)
    assert actual == expected
