from typing import List
from collections import defaultdict


class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        ans, count = 0, defaultdict(int)
        for t in time:
            ans += count[-t % 60]  # (60 - t % 60) % 60
            count[t % 60] += 1
        return ans


for time, expected in [
    ([], 0),
    ([31, 21, 153, 100, 48], 0),
    ([30, 20, 150, 100, 40], 3),
    ([60, 60, 60], 3),
]:
    sol = Solution()
    actual = sol.numPairsDivisibleBy60(time)
    print("# of pairs total duration divisible by 60 in", time, "->", actual)
    assert actual == expected
