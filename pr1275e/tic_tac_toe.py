from typing import List


class Solution:
    def tictactoe(self, moves: List[List[int]]) -> str:
        n = 3
        # All the conditions to be checked, 8 if n = 3
        rows, cols, diag1, diag2 = [0] * n, [0] * n, 0, 0
        player = 1  # 1 for A, -1 for B
        for i, j in moves:
            rows[i] += player
            cols[j] += player
            diag1 += player if i == j else 0
            diag2 += player if i + j == n - 1 else 0
            if (
                abs(rows[i]) == n
                or abs(cols[j]) == n
                or abs(diag1) == n
                or abs(diag2) == n
            ):
                return "A" if player > 0 else "B"
            player *= -1
        return "Pending" if len(moves) < n * n else "Draw"


# TESTS
for moves, expected in [
    ([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]], "A"),
    ([[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]], "B"),
    ([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]], "Draw"),
    ([[0, 0], [1, 1]], "Pending"),
]:
    sol = Solution()
    actual = sol.tictactoe(moves)
    print("The winner of moves", moves, "->", actual)
    assert actual == expected
