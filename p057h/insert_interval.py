from typing import List


class Solution:
    def insertV1(
        self, intervals: List[List[int]], newInterval: List[int]
    ) -> List[List[int]]:
        ans, inserted = [], False
        ns, ne = newInterval
        for s, e in intervals:
            if e < ns:
                ans.append([s, e])
            elif s > ne:
                if not inserted:
                    ans.append([ns, ne])
                    inserted = True
                ans.append([s, e])
            else:
                ns = min(ns, s)
                ne = max(ne, e)

        if not inserted:
            ans.append([ns, ne])
            inserted = True
        return ans

    def insertV2(
        self, intervals: List[List[int]], newInterval: List[int]
    ) -> List[List[int]]:
        left, right = [], []
        ns, ne = newInterval
        for s, e in intervals:
            if e < ns:
                left.append([s, e])
            elif s > ne:
                right.append([s, e])
            else:
                ns = min(ns, s)
                ne = max(ne, e)

        return left + [[ns, ne]] + right


# TESTS
tests = [
    ([], [2, 5], [[2, 5]]),
    ([[1, 3]], [4, 5], [[1, 3], [4, 5]]),
    ([[4, 8]], [2, 3], [[2, 3], [4, 8]]),
    ([[4, 8]], [4, 7], [[4, 8]]),
    ([[4, 8]], [3, 9], [[3, 9]]),
    ([[1, 3], [6, 9]], [2, 5], [[1, 5], [6, 9]]),
    ([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8], [[1, 2], [3, 10], [12, 16]]),
]
for intervals, new, expected in tests:
    sol = Solution()
    actual = sol.insertV1(intervals, new)
    print("Insert", new, "into", intervals, "->", actual)
    assert actual == expected
    assert expected == sol.insertV2(intervals, new)
