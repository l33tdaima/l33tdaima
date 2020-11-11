from typing import List


class Solution:
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
        return [[1 - i for i in row[::-1]] for row in A]


# TESTS
tests = [
    ([[1, 1, 0], [1, 0, 1], [0, 0, 0]], [[1, 0, 0], [0, 1, 0], [1, 1, 1]]),
    (
        [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]],
        [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]],
    ),
]
for A, expected in tests:
    sol = Solution()
    actual = sol.flipAndInvertImage(A)
    print("Flip and invert image ->", actual)
    assert actual == expected
