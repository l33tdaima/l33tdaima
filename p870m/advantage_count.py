from typing import List
from collections import defaultdict


class Solution:
    def advantageCount(self, A: List[int], B: List[int]) -> List[int]:
        sorted_a = sorted(A)
        take = defaultdict(list)
        for b in sorted(B)[::-1]:
            if b < sorted_a[-1]:
                take[b].append(sorted_a.pop())
        return [(take[b] or sorted_a).pop() for b in B]


# TESTS
for A, B, expected in [
    ([2, 7, 11, 15], [1, 10, 4, 11], [2, 11, 7, 15]),
    ([12, 24, 8, 32], [13, 25, 32, 11], [24, 32, 8, 12]),
]:
    sol = Solution()
    actual = sol.advantageCount(A, B)
    print("Advantage shuffle in A", A, "over B", B, "->", actual)
    assert actual == expected
