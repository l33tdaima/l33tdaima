from typing import List
from collections import defaultdict


class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        M, N = len(matrix), len(matrix[0])
        for row in matrix:
            for c in range(1, N):
                row[c] += row[c - 1]
        ans = 0
        for c1 in range(N):
            for c2 in range(c1, N):
                count = defaultdict(int)
                subsum, count[0] = 0, 1
                for r in range(M):
                    subsum += matrix[r][c2] - (matrix[r][c1 - 1] if c1 > 0 else 0)
                    ans += count[subsum - target]
                    count[subsum] += 1
        return ans


# TESTS
for matrix, target, expected in [
    ([[0, 1, 0], [1, 1, 1], [0, 1, 0]], 0, 4),
    ([[1, -1], [-1, 1]], 0, 5),
    ([[904]], 0, 0),
]:
    sol = Solution()
    actual = sol.numSubmatrixSumTarget(matrix, target)
    print("# of submatrices sum to", target, "->", actual)
    assert actual == expected
