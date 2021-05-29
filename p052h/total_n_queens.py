from typing import List


class Solution:
    def totalNQueens(self, n: int) -> int:
        ans = 0

        def dfs(queens: List[int], xydiff: List[int], xysum: List[int]) -> None:
            """
            queens: column index of placed queens from row [0, n)
            xydiff: coordinate diffs have been occupied
            xysum:  coordinate sums have been occupied
            """
            nonlocal ans
            r = len(queens)
            if r == n:
                ans += 1
                return
            for c in range(n):
                if c not in queens and c - r not in xydiff and r + c not in xysum:
                    dfs(queens + [c], xydiff + [c - r], xysum + [r + c])

        dfs([], [], [])
        return ans


# TESTS
for n in range(1, 10):
    sol = Solution()
    actual = sol.totalNQueens(n)
    print(f"# of distinct solutions to {n}-queens problem -> {actual}")
