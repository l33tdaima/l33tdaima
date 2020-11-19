from typing import List


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        merged = []
        for i in sorted(intervals, key=lambda x: x[0]):
            if not merged or merged[-1][1] < i[0]:
                merged.append(list(i))
                # merged.append(i) faster but mutate the input
            else:
                merged[-1][1] = max(merged[-1][1], i[1])
        return merged


# TESTS
for intervals, expected in [
    ([[1, 4], [5, 8]], [[1, 4], [5, 8]]),
    ([[1, 4], [4, 5]], [[1, 5]]),
    ([[1, 3], [2, 6], [8, 10], [15, 18]], [[1, 6], [8, 10], [15, 18]]),
]:
    sol = Solution()
    actual = sol.merge(intervals)
    print("Merge", intervals, "->", actual)
    assert actual == expected
