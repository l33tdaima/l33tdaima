from typing import List


class Solution:
    def hIndex(self, citations: List[int]) -> int:
        N = len(citations)
        count, h = [0] * (N + 1), N
        for c in citations:
            count[min(c, N)] += 1
        s = count[N]
        while h > s:
            h -= 1
            s += count[h]
        return h


# TESTS
tests = [
    [[1, 1], 1],
    [[6, 6, 4, 8, 4, 3, 3, 10], 4],
    [[3, 0, 6, 1, 5], 3],
    [[9, 10, 9, 8, 13, 20, 9], 7],
    [[0, 0, 0, 0, 0, 0], 0],
    [[0, 0, 100, 0, 0, 0], 1],
]
for t in tests:
    sol = Solution()
    actual = sol.hIndex(t[0])
    print("H-Index of", t[0], "->", actual)
    assert actual == t[1]
