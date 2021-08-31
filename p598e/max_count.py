from typing import List


class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        if not ops:
            return m * n
        x, y = zip(*ops)
        return min(x) * min(y)


# TESTS
for m, n, ops, expected in [
    (3, 3, [[2, 2], [3, 3]], 4),
    (
        3,
        3,
        [
            [2, 2],
            [3, 3],
            [3, 3],
            [3, 3],
            [2, 2],
            [3, 3],
            [3, 3],
            [3, 3],
            [2, 2],
            [3, 3],
            [3, 3],
            [3, 3],
        ],
        4,
    ),
    (3, 3, [], 9),
]:
    sol = Solution()
    actual = sol.maxCount(m, n, ops)
    print("# of maximum integers in", ops, "->", actual)
    assert actual == expected
