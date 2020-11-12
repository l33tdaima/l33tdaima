from typing import List


class Solution:
    def validSquare(
        self, p1: List[int], p2: List[int], p3: List[int], p4: List[int]
    ) -> bool:
        def dist(p1: List[int], p2: List[int]):
            return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1])

        dist_set = set(
            [
                dist(p1, p2),
                dist(p1, p3),
                dist(p1, p4),
                dist(p2, p3),
                dist(p2, p4),
                dist(p3, p4),
            ]
        )
        return 0 not in dist_set and len(dist_set) == 2


# TESTS
for p, expected in [
    ([[0, 0], [1, 1], [1, 0], [0, 1]], True),
    ([[0, 0], [0, 2], [1, 1], [-1, 1]], True),
    ([[0, 0], [0, 2], [1, 2], [-1, 1]], False),
]:
    sol = Solution()
    actual = sol.validSquare(p[0], p[1], p[2], p[3])
    print("Could", p, "construct a square? ->", actual)
    assert actual == expected
