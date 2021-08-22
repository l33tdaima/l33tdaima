from typing import List, Tuple
from collections import defaultdict


class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        # Check if putting val to i, j a valid move
        def valid(i: int, j: int, val: str) -> bool:
            return (
                val not in board[i]
                and val not in [board[r][j] for r in range(9)]
                and val
                not in [
                    board[3 * (i // 3) + k // 3][3 * (j // 3) + k % 3] for k in range(9)
                ]
            )

        def solver() -> bool:
            for i in range(9):
                for j in range(9):
                    if board[i][j] == ".":
                        for v in map(str, range(1, 10)):
                            if not valid(i, j, v):
                                continue
                            board[i][j] = v
                            if solver():
                                return True
                        board[i][j] = "."
                        return False
            return True

        solver()


# TESTS
for board, expected in [
    (
        [
            ["5", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
        [
            ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
            ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
            ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
            ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
            ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
            ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
            ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
            ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
            ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
        ],
    ),
]:
    sol = Solution()
    print("Solving Sudoku", board)
    sol.solveSudoku(board)
    print("->", board)
    assert board == expected
