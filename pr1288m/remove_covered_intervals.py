from typing import List


class Solution:
    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda itv: (itv[0], -itv[1]))
        [_, r] = intervals[0]
        removed = 0
        for i in range(1, len(intervals)):
            if intervals[i][1] <= r:
                removed += 1
            else:
                [_, r] = intervals[i]
        return len(intervals) - removed


# TESTS
tests = [
    ([[1, 4], [3, 6], [2, 8]], 2),
    ([[1, 4], [2, 3]], 1),
    ([[0, 10], [5, 12]], 2),
    ([[3, 10], [4, 10], [5, 11]], 2),
    ([[1, 2], [1, 4], [3, 4]], 1),
    ([[1, 3], [2, 6], [3, 5]], 2),
]
for intervals, expected in tests:
    sol = Solution()
    actual = sol.removeCoveredIntervals(intervals)
    print("# of remaining intervals", intervals, "->", actual)
    assert actual == expected
