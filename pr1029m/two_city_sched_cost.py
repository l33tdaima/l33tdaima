from functools import reduce


class Solution:
    def twoCitySchedCostV1(self, costs: list[list[int]]) -> int:
        N = len(costs) // 2
        costs_by_diff = sorted(costs, key=lambda c: c[0] - c[1])
        return sum([a for a, _ in costs_by_diff[:N]]) + sum(
            [b for _, b in costs_by_diff[-N:]]
        )

    def twoCitySchedCostV2(self, costs: list[list[int]]) -> int:
        N = len(costs) // 2
        costs_by_diff = sorted(costs, key=lambda c: c[0] - c[1])
        cost_a = reduce(lambda a, v: a + v[0], costs_by_diff[:N], 0)
        return reduce(lambda a, v: a + v[1], costs_by_diff[-N:], cost_a)


# TESTS
for costs, expected in [
    ([[10, 20], [30, 200]], 50),
    ([[10, 20], [30, 200], [400, 50], [30, 20]], 110),
    (
        [
            [259, 770],
            [448, 54],
            [926, 667],
            [184, 139],
            [840, 118],
            [577, 469],
        ],
        1859,
    ),
    (
        [
            [515, 563],
            [451, 713],
            [537, 709],
            [343, 819],
            [855, 779],
            [457, 60],
            [650, 359],
            [631, 42],
        ],
        3086,
    ),
]:
    sol = Solution()
    actual = sol.twoCitySchedCostV1(costs)
    print("The minimum cost to fly in", costs, "->", actual)
    assert actual == expected
