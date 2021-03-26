from typing import List, Set


class Solution:
    def pacificAtlantic(self, matrix: List[List[int]]) -> List[List[int]]:
        if not matrix:
            return []
        DIRS = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        rows, cols = len(matrix), len(matrix[0])
        p_reachable, a_reachable = set(), set()

        def dfs(i: int, j: int, visited: Set) -> None:
            if (i, j) in visited:
                return
            visited.add((i, j))
            for d in DIRS:
                ni, nj = i + d[0], j + d[1]
                if 0 <= ni < rows and 0 <= nj < cols and matrix[ni][nj] >= matrix[i][j]:
                    dfs(ni, nj, visited)

        for r in range(rows):
            dfs(r, 0, p_reachable)
            dfs(r, cols - 1, a_reachable)

        for c in range(cols):
            dfs(0, c, p_reachable)
            dfs(rows - 1, c, a_reachable)

        return list(p_reachable & a_reachable)


# TESTS
for matrix, expected in [
    ([], []),
    (
        [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4],
        ],
        [(0, 4), (1, 3), (1, 4), (2, 2), (3, 0), (3, 1), (4, 0)],
    ),
]:
    sol = Solution()
    actual = sol.pacificAtlantic(matrix)
    print(
        "The coordinates where water can flow to both the Pacific and Atlantic ocean ->",
        actual,
    )
    assert sorted(actual) == sorted(expected)
