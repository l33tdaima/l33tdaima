from collections import Counter


class Solution:
    def largestOverlap(self, A: list[list[int]], B: list[list[int]]) -> int:
        A1 = [
            (i, j)
            for i, row in enumerate(A)
            for j, v in enumerate(row)
            if v == 1
        ]
        B1 = [
            (i, j)
            for i, row in enumerate(B)
            for j, v in enumerate(row)
            if v == 1
        ]
        counter = Counter((xa - xb, ya - yb) for xa, ya in A1 for xb, yb in B1)
        return max(counter.values() or [0])
        # if the input has no 1, count will be None


# TESTS
for A, B, expected in [
    ([[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 1, 1], [0, 0, 1]], 3),
    ([[1, 1, 0], [0, 1, 0], [0, 1, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 1]], 1),
    ([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 1, 1], [0, 0, 1]], 0),
]:
    sol = Solution()
    actual = sol.largestOverlap(A, B)
    print("The largest possible overlap from", A, "to", B, "->", actual)
    assert actual == expected
