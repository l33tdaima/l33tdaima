from typing import List


class Solution:
    def findMinArrowShotsStart(self, points: List[List[int]]) -> int:
        points.sort()
        ans, arrow = 0, float("-Inf")
        for s, e in points:
            if s > arrow:
                ans += 1
                arrow = e
            else:
                arrow = min(arrow, e)
        return ans

    def findMinArrowShotsEnd(self, points: List[List[int]]) -> int:
        points.sort(key=lambda p: (p[1], p[0]))
        ans, arrow = 0, float("-Inf")
        for s, e in points:
            if s > arrow:
                ans += 1
                arrow = e
        return ans


# TESTS
tests = [
    ([], 0),
    ([[10, 16], [2, 8], [1, 6], [7, 12]], 2),
    ([[2, 5], [1, 6], [6, 8]], 2),
    ([[10, 16], [2, 8], [1, 6], [7, 12]], 2),
    ([[10, 16], [2, 5], [1, 6], [4, 8]], 2),
    ([[1, 2], [3, 4], [5, 6], [7, 8]], 4),
    ([[1, 2]], 1),
    ([[2, 3], [2, 3]], 1),
]
for points, expected in tests:
    sol = Solution()
    actual = sol.findMinArrowShotsStart(points)
    print("The minimum arrows to burst all balloons", points, "->", actual)
    assert actual == expected
    assert expected == sol.findMinArrowShotsEnd(points)
