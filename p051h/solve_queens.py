from typing import List


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        ans = []

        def dfs(queens: List[int], xydiff: List[int], xysum: List[int]) -> None:
            """
            queens: index of placed queens from row [0, n)
            xydiff: coordinate diffs have been occupied
            xysum:  coordinate sums have been occupied
            """
            r = len(queens)
            if r == n:
                ans.append(queens)
                return
            for c in range(n):
                if c not in queens and c - r not in xydiff and r + c not in xysum:
                    dfs(queens + [c], xydiff + [c - r], xysum + [r + c])

        dfs([], [], [])
        return [["." * i + "Q" + "." * (n - i - 1) for i in sol] for sol in ans]


# TESTS
for n in range(1, 6):
    sol = Solution()
    actual = sol.solveNQueens(n)
    print(f"All solutions to {n}-queens puzzle ->", actual)
