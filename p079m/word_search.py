from typing import List
from collections import defaultdict


class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        rows, cols = len(board), len(board[0])
        dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        visited = defaultdict(bool)

        def helper(i: int, j: int, c: int) -> bool:
            if c == len(word):
                return True
            if i < 0 or i >= rows or j < 0 or j >= cols:
                return False
            if visited[(i, j)] or board[i][j] != word[c]:
                return False
            visited[(i, j)] = True
            for di, dj in dirs:
                if helper(i + di, j + dj, c + 1):
                    return True
            visited[(i, j)] = False
            return False

        for i in range(rows):
            for j in range(cols):
                if helper(i, j, 0):
                    return True
        return False


# TESTS
tests = [
    (
        [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
        "ABCCED",
        True,
    ),
    (
        [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
        "SEE",
        True,
    ),
    (
        [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
        "ABCB",
        False,
    ),
]
for t in tests:
    sol = Solution()
    actual = sol.exist(t[0], t[1])
    print("Word", t[1], "exists in the board ->", actual)
    assert actual == t[2]
