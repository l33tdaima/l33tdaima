from typing import List


class Solution:
    def movesToChessboard(self, board: List[List[int]]) -> int:
        n = len(board)
        if any(
            board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j] == 1
            for i in range(n)
            for j in range(n)
        ):
            return -1
        if not n // 2 <= sum(board[0]) <= (n + 1) // 2:
            return -1
        if not n // 2 <= sum(board[i][0] for i in range(n)) <= (n + 1) // 2:
            return -1
        col = sum(board[0][j] == j % 2 for j in range(n))
        row = sum(board[i][0] == i % 2 for i in range(n))
        if n % 2:
            if col % 2:
                col = n - col
            if row % 2:
                row = n - row
        else:
            col = min(col, n - col)
            row = min(row, n - row)

        return (row + col) // 2


# TESTS
for board, expected in [
    ([[0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1]], 2),
    ([[0, 1], [1, 0]], 0),
    ([[1, 0], [1, 0]], -1),
]:
    sol = Solution()
    actual = sol.movesToChessboard(board)
    print("The minimum # of moves to transform", board, "into a chessboard ->", actual)
    assert actual == expected
