from typing import List
from collections import defaultdict


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        sum_count = defaultdict(int)
        sum_count[0] = 1
        s, ans = 0, 0
        for n in nums:
            s += n
            if s - k in sum_count:
                ans += sum_count[s - k]
            sum_count[s] += 1
        return ans


# TESTS
tests = [
    ([1], 0, 0),
    ([1, 1, 1], 2, 2),
    ([1, 2, 3, 4, 5], 11, 0),
    ([3, 4, 7, 2, -3, 1, 4, 2], 7, 4),
]
for t in tests:
    sol = Solution()
    act = sol.subarraySum(t[0], t[1])
    print("# of subarrays of", t[0], "sum to", t[1], "=>", act)
    assert act == t[2]
