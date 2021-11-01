from typing import List


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        def mark(i: int, j: int) -> None:
            if board[i][j] == "O":
                board[i][j] = "N"
                if i > 1:
                    mark(i - 1, j)
                if j > 1:
                    mark(i, j - 1)
                if i < ROWS - 1:
                    mark(i + 1, j)
                if j < COLS - 1:
                    mark(i, j + 1)

        ROWS, COLS = len(board), len(board[0])

        for i in range(ROWS):
            mark(i, 0)
            mark(i, COLS - 1)
        for j in range(COLS):
            mark(0, j)
            mark(ROWS - 1, j)

        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] == "O":
                    board[i][j] = "X"

        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] == "N":
                    board[i][j] = "O"


# TESTS
tests = [
    [
        ["X", "X", "X", "X"],
        ["X", "O", "O", "X"],
        ["X", "X", "O", "X"],
        ["X", "O", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "X", "O", "X"],
    ],
    [
        ["O", "O", "X", "X", "X"],
        ["X", "O", "O", "X", "X"],
        ["X", "X", "O", "X", "X"],
        ["X", "O", "X", "X", "X"],
        ["X", "O", "X", "X", "X"],
    ],
    [
        ["X", "X", "X", "X", "O", "X"],
        ["O", "X", "X", "O", "O", "X"],
        ["X", "O", "X", "O", "O", "O"],
        ["X", "O", "O", "O", "X", "O"],
        ["O", "O", "X", "X", "O", "X"],
        ["X", "O", "X", "O", "X", "X"],
    ],
    [
        ["X", "O", "X", "O", "X", "O", "O", "O", "X", "O"],
        ["X", "O", "O", "X", "X", "X", "O", "O", "O", "X"],
        ["O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
        ["O", "O", "O", "O", "O", "O", "X", "O", "O", "X"],
        ["O", "O", "X", "X", "O", "X", "X", "O", "O", "O"],
        ["X", "O", "O", "X", "X", "X", "O", "X", "X", "O"],
        ["X", "O", "X", "O", "O", "X", "X", "O", "X", "O"],
        ["X", "X", "O", "X", "X", "O", "X", "O", "O", "X"],
        ["O", "O", "O", "O", "X", "O", "X", "O", "X", "O"],
        ["X", "X", "O", "X", "X", "X", "X", "O", "O", "O"],
    ],
]
for t in tests:
    sol = Solution()
    print("Capture surrounded regions ->\n")
    sol.solve(t)
    print(t)
