from typing import List
import bisect


class Solution:
    def jobScheduling(
        self, startTime: List[int], endTime: List[int], profit: List[int]
    ) -> int:
        jobs = sorted(zip(startTime, endTime, profit), key=lambda x: x[1])
        dp = [[0, 0]]
        for s, e, p in jobs:
            i = bisect.bisect(dp, [s + 1]) - 1
            if dp[i][1] + p > dp[-1][1]:
                dp.append([e, dp[i][1] + p])
        return dp[-1][1]


# TESTS
for startTime, endTime, profit, expected in [
    ([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70], 120),
    ([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60], 150),
    ([1, 1, 1], [2, 3, 4], [5, 6, 4], 6),
]:
    sol = Solution()
    actual = sol.jobScheduling(startTime, endTime, profit)
    print(
        "The maximum profit scheduling jobs", startTime, endTime, profit, "->", actual
    )
    assert actual == expected

