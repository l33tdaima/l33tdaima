from typing import List
from math import atan2, exp, pi


class Solution:
    def visiblePoints(
        self, points: List[List[int]], angle: int, location: List[int]
    ) -> int:
        polar, extra, angle = [], 0, angle * pi / 180
        for p in points:
            if p == location:
                extra += 1
            else:
                polar.append(atan2(p[1] - location[1], p[0] - location[0]))

        polar.sort()
        polar2 = polar + [p + 2 * pi for p in polar]
        l, ans = 0, 0
        for r in range(len(polar2)):
            while polar2[r] - polar2[l] > angle:
                l += 1
            ans = max(ans, r - l + 1)
        return ans + extra


# TESTS
for points, angle, location, expected in [
    ([[2, 1], [2, 2], [3, 3]], 90, [1, 1], 3),
    ([[2, 1], [2, 2], [3, 4], [1, 1]], 90, [1, 1], 4),
    ([[1, 0], [2, 1]], 13, [1, 1], 1),
    ([[1, 1], [2, 2], [1, 2], [2, 1]], 0, [1, 1], 2),
]:
    sol = Solution()
    actual = sol.visiblePoints(points, angle, location)
    print(
        "The maximum number of points can be seen from",
        location,
        "with angle",
        angle,
        "in",
        points,
        "->",
        actual,
    )
    assert actual == expected
