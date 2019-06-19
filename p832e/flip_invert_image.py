from typing import List

class Solution:
    def flipAndInvertImageV1(self, A: List[List[int]]) -> List[List[int]]:
        for row in A:
            mid = len(row) // 2
            for j in range(mid):
                row[j], row[-j-1] = row[-j-1] ^ 1, row[j] ^ 1
            if len(row) % 2 == 1:
                row[mid] = row[mid] ^ 1
        return A
    def flipAndInvertImageV2(self, A: List[List[int]]) -> List[List[int]]:
        return [[1 - i for i in row[::-1]] for row in A]
# TESTS
tests = [
    (
        [[1,1,0],[1,0,1],[0,0,0]],
        [[1,0,0],[0,1,0],[1,1,1]]
    ),
    (
        [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]],
        [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
    )
]
for t in tests:
    sol = Solution()
    actual = sol.flipAndInvertImageV2(t[0])
    print("Flip and invert image ->", actual)
    assert(actual == t[1])
    assert(sol.flipAndInvertImageV1(t[0]) == t[1])
