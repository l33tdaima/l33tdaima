class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        rows, cols = len(board), len(board[0])
        dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]

        def helper(i: int, j: int, c: int) -> bool:
            if c == len(word):
                return True
            if i < 0 or i >= rows or j < 0 or j >= cols:
                return False
            if board[i][j] != word[c]:
                return False
            mem = board[i][j]
            board[i][j] = "#"
            for di, dj in dirs:
                if helper(i + di, j + dj, c + 1):
                    return True
            board[i][j] = mem
            return False

        for i in range(rows):
            for j in range(cols):
                if helper(i, j, 0):
                    return True
        return False


# TESTS
for board, word, expected in [
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
    (
        [
            ["A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A"],
            ["A", "A", "A", "A", "A", "A"],
        ],
        "AAAAAAAAAAAABAA",
        False,
    ),
]:
    sol = Solution()
    actual = sol.exist(board, word)
    print("Word", word, "exists in the board ->", actual)
    assert actual == expected
