from typing import List
from collections import defaultdict


class Solution:
    def matrixRankTransform(self, matrix: List[List[int]]) -> List[List[int]]:
        m, n = len(matrix), len(matrix[0])
        d = defaultdict(list)
        for i in range(m):
            for j in range(n):
                d[matrix[i][j]].append((i, j))
        max_rank = [0] * (m + n)  # The largest rank of the row and column combined

        def find(p, i):
            if p[i] != i:
                p[i] = find(p, p[i])
            return p[i]

        for v in sorted(d):
            p = list(range(m + n))
            rank = list(max_rank)
            for i, j in d[v]:
                i, j = find(p, i), find(p, j + m)
                p[i] = j  # union
                rank[j] = max(rank[i], rank[j])
            for i, j in d[v]:
                max_rank[i] = max_rank[j + m] = matrix[i][j] = rank[find(p, i)] + 1
        return matrix


# TESTS
for matrix, expected in [
    ([[1, 2], [3, 4]], [[1, 2], [2, 3]]),
    ([[7, 7], [7, 7]], [[1, 1], [1, 1]]),
    (
        [[20, -21, 14], [-19, 4, 19], [22, -47, 24], [-19, 4, 19]],
        [[4, 2, 3], [1, 3, 4], [5, 1, 6], [1, 3, 4]],
    ),
    ([[7, 3, 6], [1, 4, 5], [9, 8, 2]], [[5, 1, 4], [1, 2, 3], [6, 3, 1]]),
]:
    sol = Solution()
    print("The rank of", matrix, "->")
    actual = sol.matrixRankTransform(matrix)
    print(" ", actual)
    assert actual == expected
