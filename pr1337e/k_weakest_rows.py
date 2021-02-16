from typing import List


class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        def numones(row: List[int]) -> int:
            if row[0] == 0:
                return 0
            l, r = 0, len(row) - 1
            while l < r:
                m = (l + r) // 2 + 1
                if row[m] == 0:
                    r = m - 1
                else:
                    l = m
            return l + 1

        weakness = [(numones(row), i) for i, row in enumerate(mat)]
        return [i for _, i in sorted(weakness)[:k]]


# TESTS
for mat, k, expected in [
    (
        [
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        3,
        [2, 0, 3],
    ),
    ([[1, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0]], 2, [0, 2]),
    ([[1, 0], [0, 0], [1, 0]], 2, [1, 0]),
]:
    sol = Solution()
    actual = sol.kWeakestRows(mat, k)
    print("The", k, "weakest rows in", mat, "->", actual)
    assert actual == expected
