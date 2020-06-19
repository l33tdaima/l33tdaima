from typing import List


class Solution:
    def hIndex(self, citations: List[int]) -> int:
        N = len(citations)
        l, h = 0, N
        while l < h:
            m = (l + h) // 2 + 1
            if citations[N - m] >= m:
                l = m
            else:
                h = m - 1
        return l


# TESTS
tests = [
    [[8, 8, 8, 8, 9], 5],
    [[0, 0, 0, 0, 0, 0], 0],
    [[0, 0, 0, 0, 0, 100], 1],
    [[0, 1, 3, 5, 6], 3],
    [[0, 1, 2, 2, 3, 4, 8], 3],
]
for t in tests:
    sol = Solution()
    actual = sol.hIndex(t[0])
    print("H-Index of", t[0], "->", actual)
    assert actual == t[1]
