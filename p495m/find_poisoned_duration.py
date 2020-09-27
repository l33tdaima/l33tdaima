from typing import List


class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        if len(timeSeries) == 0:
            return 0
        intervals = list(map(lambda t: (t, t + duration), timeSeries))
        ans = 0
        s, e = intervals[0]
        for i in range(1, len(intervals)):
            if e < intervals[i][0]:
                ans += e - s
                s, e = intervals[i]
            else:
                e = intervals[i][1]
        ans += e - s
        return ans


# TESTS
tests = [
    ([], 2, 0),
    ([1, 4], 2, 4),
    ([1, 2], 2, 3),
    ([1, 2, 3, 4], 1, 4),
    ([1, 2, 3, 4], 2, 5),
]
for time_sieries, duration, expected in tests:
    sol = Solution()
    actual = sol.findPoisonedDuration(time_sieries, duration)
    print("The total time(", time_sieries, ",", duration, ") ->", actual)
    assert actual == expected
