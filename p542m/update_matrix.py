from typing import List


class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        DIR = [(0, -1), (-1, 0), (0, 1), (1, 0)]
        m, n = len(mat), len(mat[0])
        ans = [[0 if v == 0 else float("Inf") for v in mat[i]] for i in range(m)]
        # BFS queue
        queue = [(i, j) for i in range(m) for j in range(n) if ans[i][j] == 0]
        while queue:
            i, j = queue.pop(0)
            for di, dj in DIR:
                ni, nj = i + di, j + dj
                if (
                    not (0 <= ni < m)
                    or not (0 <= nj < n)
                    or ans[ni][nj] <= ans[i][j] + 1
                ):
                    continue
                queue.append((ni, nj))
                ans[ni][nj] = ans[i][j] + 1
        return ans


# TESTS
for mat, expected in [
    ([[0, 0, 0], [0, 1, 0], [0, 0, 0]], [[0, 0, 0], [0, 1, 0], [0, 0, 0]]),
    ([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[0, 0, 0], [0, 1, 0], [1, 2, 1]]),
    (
        [[0, 0, 0], [0, 1, 0], [1, 1, 1], [1, 1, 1]],
        [[0, 0, 0], [0, 1, 0], [1, 2, 1], [2, 3, 2]],
    ),
]:
    sol = Solution()
    actual = sol.updateMatrix(mat)
    print("Distance to nearest 0 of", mat, "->", actual)
    assert actual == expected
