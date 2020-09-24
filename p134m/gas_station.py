from typing import List
from itertools import accumulate


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        surplus = [g - c for g, c in zip(gas, cost)]
        psum = list(accumulate(surplus[::-1]))[::-1]
        return psum.index(max(psum)) if psum[0] >= 0 else -1


# TESTS
tests = [
    ([1, 2, 3, 4, 5], [3, 4, 5, 1, 2], 3),
    ([2, 3, 4], [3, 4, 3], -1),
]
for gas, cost, expected in tests:
    sol = Solution()
    actual = sol.canCompleteCircuit(gas, cost)
    print("Can complete curcuit using gas", gas, "and cost", cost, "->", actual)
    assert actual == expected
