from typing import List
from heapq import heappush, heappop


class Solution:
    def maxPerformance(
        self, n: int, speed: List[int], efficiency: List[int], k: int
    ) -> int:
        ans, sheap, ssum = 0, [], 0
        for e, s in sorted(zip(efficiency, speed), reverse=True):
            heappush(sheap, s)
            ssum += s
            if len(sheap) > k:
                ssum -= heappop(sheap)
            ans = max(ans, ssum * e)
        return ans % (10 ** 9 + 7)


# TESTS
for n, speed, efficiency, k, expected in [
    (6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 2, 60),
    (6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 3, 68),
    (6, [2, 10, 3, 1, 5, 8], [5, 4, 3, 9, 7, 2], 4, 72),
]:
    sol = Solution()
    actual = sol.maxPerformance(n, speed, efficiency, k)
    print("The maximum performance of team of at most size", k, "->", actual)
    assert actual == expected
