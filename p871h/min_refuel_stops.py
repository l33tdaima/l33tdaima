from typing import List
from heapq import heappush, heappop


class Solution:
    def minRefuelStopsDP(
        self, target: int, startFuel: int, stations: List[List[int]]
    ) -> int:
        dp = [startFuel] + [0] * len(stations)
        for i in range(len(stations)):
            for t in range(i + 1)[::-1]:
                if dp[t] >= stations[i][0]:
                    dp[t + 1] = max(dp[t + 1], dp[t] + stations[i][1])
        for t, r in enumerate(dp):
            if r >= target:
                return t
        return -1

    def minRefuelStopsGreedy(
        self, target: int, startFuel: int, stations: List[List[int]]
    ) -> int:
        pq, ans, i, N = [], 0, 0, len(stations)
        while startFuel < target:
            while i < N and startFuel >= stations[i][0]:
                heappush(pq, -stations[i][1])
                i += 1
            if not pq:
                return -1
            startFuel += -heappop(pq)
            ans += 1
        return ans


# TESTS
for target, startFuel, stations, expected in [
    (1, 1, [], 0),
    (100, 1, [[10, 100]], -1),
    (100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]], 2),
]:
    sol = Solution()
    actual = sol.minRefuelStopsDP(target, startFuel, stations)
    print(f"The least refueling stops to reach {target} in {stations} -> {actual}")
    assert actual == expected
    assert expected == sol.minRefuelStopsGreedy(target, startFuel, stations)
