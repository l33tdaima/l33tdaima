from typing import List


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        row = [1]
        while rowIndex > 0:
            row = [0] + row
            for i in range(len(row) - 1):
                row[i] += row[i + 1]
            rowIndex -= 1
        return row


# TESTS
tests = [
    (0, [1]),
    (1, [1, 1]),
    (2, [1, 2, 1]),
    (3, [1, 3, 3, 1]),
    (4, [1, 4, 6, 4, 1]),
]
for t in tests:
    sol = Solution()
    actual = sol.getRow(t[0])
    print("Pascal triangle of", t[0], "index ->", actual)
    assert actual == t[1]
