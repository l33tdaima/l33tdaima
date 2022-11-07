from typing import List


class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        if len(coordinates) <= 2:
            return True
        (x0, y0), (x1, y1) = coordinates[:2]
        return all(
            (y1 - y0) * (x - x0) == (x1 - x0) * (y - y0) for x, y in coordinates
        )


# TESTS
tests = [
    ([[4, 9], [12, 0]], True),
    ([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], True),
    ([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]], False),
]
for t in tests:
    sol = Solution()
    print("Is", t[0], "a straight line? ->", t[1])
    assert sol.checkStraightLine(t[0]) == t[1]
