from typing import List


class Solution:
    def intervalIntersection(
        self, A: List[List[int]], B: List[List[int]]
    ) -> List[List[int]]:
        ans, i, j = [], 0, 0
        while i < len(A) and j < len(B):
            if A[i][1] < B[j][0]:  # without overlapping
                i += 1
            elif B[j][1] < A[i][0]:  # without overlapping
                j += 1
            else:  # with overlapping
                ans.append([max(A[i][0], B[j][0]), min(A[i][1], B[j][1])])
                if A[i][1] < B[j][1]:
                    i += 1
                else:
                    j += 1
        return ans


# TESTS
tests = [
    ([[0, 2], [3, 5]], [[1, 6]], [[1, 2], [3, 5]]),
    ([[4, 11]], [[1, 2], [8, 11], [12, 13], [14, 15], [17, 19]], [[8, 11]]),
    (
        [[0, 2], [5, 10], [13, 23], [24, 25]],
        [[1, 5], [8, 12], [15, 24], [25, 26]],
        [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]],
    ),
    (
        [[0, 1], [10, 12], [15, 20], [23, 33], [34, 35]],
        [[3, 4], [5, 7], [8, 9], [11, 15], [18, 22], [25, 34], [35, 36]],
        [[11, 12], [15, 15], [18, 20], [25, 33], [34, 34], [35, 35]],
    ),
]
for t in tests:
    sol = Solution()
    actual = sol.intervalIntersection(t[0], t[1])
    print("Interval intersection ->", actual)
    assert actual == t[2]
