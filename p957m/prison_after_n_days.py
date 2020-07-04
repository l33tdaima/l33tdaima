from typing import List


class Solution:
    def prisonAfterNDays(self, cells: List[int], N: int) -> List[int]:
        seen = dict()
        while N:
            seen[str(cells)] = N
            # simulate the next day's state
            N -= 1
            cells = (
                [0]
                + [cells[i - 1] ^ cells[i + 1] ^ 1 for i in range(1, 7)]
                + [0]
            )
            if str(cells) in seen:
                N %= seen[str(cells)] - N
        return cells


# TESTS
tests = [
    ([0, 1, 0, 1, 1, 0, 0, 1], 7, [0, 0, 1, 1, 0, 0, 0, 0]),
    ([1, 0, 0, 1, 0, 0, 1, 0], 1000000000, [0, 0, 1, 1, 1, 1, 1, 0]),
]

for t in tests:
    sol = Solution()
    actual = sol.prisonAfterNDays(t[0], t[1])
    assert actual == t[2]
