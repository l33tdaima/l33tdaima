from typing import List

class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        def cap(x, y, dx, dy) -> int:
            while x >= 0 and x < len(board) and y >= 0 and y < len(board[x]) and board[x][y] != 'B':
                if board[x][y] == 'p':
                    return 1
                x, y = x + dx, y + dy
            return 0
        # Locate rook
        for i in range(8):
            for j in range(8):
                if board[i][j] == 'R':
                    return cap(i, j, 0, -1) + cap(i, j, 1, 0) + cap(i, j, 0, 1) + cap(i, j, -1, 0)
        return 0

# TESTS
tests = [
    ([
        [".",".",".",".",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        [".",".",".","R",".",".",".","p"],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."]
    ], 3),
    ([
        [".",".",".",".",".",".",".","."],
        [".","p","p","p","p","p",".","."],
        [".","p","p","B","p","p",".","."],
        [".","p","B","R","B","p",".","."],
        [".","p","p","B","p","p",".","."],
        [".","p","p","p","p","p",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."]
    ], 0),
    ([
        [".",".",".",".",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        ["p","p",".","R",".","p","B","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".","B",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        [".",".",".",".",".",".",".","."]
    ], 3)
]
for t in tests:
    sol = Solution()
    actual = sol.numRookCaptures(t[0])
    print('Number of captured pawns ->', actual)
    assert(actual == t[1])