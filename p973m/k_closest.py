from typing import List
import heapq


class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        return heapq.nsmallest(K, points, lambda p: p[0] * p[0] + p[1] * p[1])


# TESTS
tests = [
    ([[1, 3], [-2, 2],], 1,),
    ([[3, 3], [5, -1], [-2, 4],], 2,),
]
for t in tests:
    sol = Solution()
    print("K closet points in", t[0], "->", sol.kClosest(t[0], t[1]))
