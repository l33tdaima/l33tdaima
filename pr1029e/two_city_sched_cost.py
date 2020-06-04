from typing import List
from functools import reduce


class Solution:
    def twoCitySchedCostV1(self, costs: List[List[int]]) -> int:
        N = len(costs) // 2
        costs_by_diff = sorted(costs, key=lambda c: c[0] - c[1])
        cost_a = reduce(lambda a, v: a + v[0], costs_by_diff[:N], 0)
        return reduce(lambda a, v: a + v[1], costs_by_diff[-N:], cost_a)

    def twoCitySchedCostV2(self, costs: List[List[int]]) -> int:
        N = len(costs) // 2
        costs_by_diff = sorted(costs, key=lambda c: c[0] - c[1])
        return sum([a for a, b in costs_by_diff[:N]]) + sum(
            [b for a, b in costs_by_diff[-N:]]
        )


# TESTS
tests = [
    ([[10, 20], [30, 200]], 50),
    ([[10, 20], [30, 200], [400, 50], [30, 20]], 110),
]
for t in tests:
    sol = Solution()
    actual = sol.twoCitySchedCostV2(t[0])
    print("The minimum cost to fly in", t[0], "->", actual)
