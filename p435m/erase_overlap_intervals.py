from typing import List


class Solution:
    def eraseOverlapIntervalsV1(self, intervals: List[List[int]]) -> int:
        count, e = 0, float("-Inf")
        for itv in sorted(intervals, key=lambda x: x[0]):
            if itv[0] < e:
                count += 1
                if itv[1] < e:
                    e = itv[1]
            else:
                e = itv[1]
        return count

    # find the maximum number of intervals that are non-overlapping.
    def eraseOverlapIntervalsV2(self, intervals: List[List[int]]) -> int:
        count, e = 0, float("-Inf")
        for itv in sorted(intervals, key=lambda x: x[1]):
            if itv[0] >= e:
                e = itv[1]
            else:
                count += 1
        return count


# TESTS
tests = [
    ([[1, 2], [2, 3], [3, 4], [1, 3]], 1),
    ([[1, 2], [1, 2], [1, 2]], 2),
    ([[1, 2], [2, 3]], 0),
]
for t in tests:
    sol = Solution()
    actual = sol.eraseOverlapIntervalsV1(t[0])
    print("The minimum number of intervals to remove from", t[0], "->", actual)
    assert actual == t[1]
    assert t[1] == sol.eraseOverlapIntervalsV2(t[0])
