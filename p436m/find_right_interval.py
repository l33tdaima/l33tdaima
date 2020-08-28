from typing import List
from bisect import bisect_left


class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        interval_index = sorted([(e[0], i) for i, e in enumerate(intervals)])
        LEN = len(interval_index)

        def bsearch(target_end: int):
            l, r = 0, LEN
            while l < r:
                mid = (l + r) // 2
                s, i = interval_index[mid]
                if s == target_end:
                    return i
                elif s < target_end:
                    l = mid + 1
                else:
                    r = mid
            return interval_index[l][1] if l < LEN else -1

        return [bsearch(e) for _, e in intervals]

    def findRightIntervalBisect(self, intervals):
        l = sorted((e[0], i) for i, e in enumerate(intervals))
        ans = []
        for e in intervals:
            r = bisect_left(l, (e[1],))
            ans.append(l[r][1] if r < len(l) else -1)
        return ans


# TESTS
tests = [
    ([[1, 2]], [-1]),
    ([[3, 4], [2, 3], [1, 2]], [-1, 0, 1]),
    ([[1, 4], [2, 3], [3, 4]], [-1, 2, -1]),
]
for t in tests:
    sol = Solution()
    actual = sol.findRightInterval(t[0])
    print("Find right interval", t[0], "->", actual)
    assert actual == t[1]
    assert t[1] == sol.findRightIntervalBisect(t[0])
