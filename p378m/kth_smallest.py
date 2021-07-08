from typing import List
from heapq import heapify, heappop, heappush


class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        n = len(matrix)
        minheap = [(v, 0, j) for j, v in enumerate(matrix[0])]
        heapify(minheap)
        while k > 1:
            _, i, j = heappop(minheap)
            if i < n - 1:
                heappush(minheap, (matrix[i + 1][j], i + 1, j))
            k -= 1
        return minheap[0][0]


# TESTS
for matrix, k, expected in [
    ([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8, 13),
    ([[1, 5, 9], [2, 11, 13], [8, 13, 15]], 4, 8),
    ([[-5]], 1, -5),
]:
    sol = Solution()
    actual = sol.kthSmallest(matrix, k)
    print(f"The {k}-th smallest element in the matrix -> {actual}")
    assert actual == expected
