from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])
        merged = []
        for i in intervals:
            if not merged or merged[-1][1] < i[0]:
                merged.append(i)
            else:
                merged[-1][1] = max(merged[-1][1], i[1])
        return merged


# TESTS
tests = [
    ([[1, 4], [5, 8]], [[1, 4], [5, 8]]),
    ([[1, 4], [4, 5]], [[1, 5]]),
    ([[1, 3], [2, 6], [8, 10], [15, 18]], [[1, 6], [8, 10], [15, 18]]),
]
for t in tests:
    sol = Solution()
    actual = sol.merge(t[0])
    print("Merge", t[0], "->", actual)
    assert t[1] == actual
