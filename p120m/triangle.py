from typing import List


class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)
        state = list(triangle[n - 1])
        for i in range(n - 2, -1, -1):
            for j in range(len(triangle[i])):
                state[j] = min(state[j], state[j + 1]) + triangle[i][j]
        return state[0]


# TESTS
tests = [
    ([[1]], 1),
    ([[1], [2, 3]], 3),
    ([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]], 11),
]
for t in tests:
    sol = Solution()
    actual = sol.minimumTotal(t[0])
    print("Minimal path sum of", t[0], "->", actual)
    assert actual == t[1]

