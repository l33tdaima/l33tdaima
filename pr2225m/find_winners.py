from collections import defaultdict


class Solution:
    def findWinners(self, matches: list[list[int]]) -> list[list[int]]:
        losses = defaultdict(int)
        for w, l in matches:
            if not w in losses:
                losses[w] = 0
            losses[l] += 1
        zero, one = [], []
        for p, c in losses.items():
            if c == 0:
                zero.append(p)
            if c == 1:
                one.append(p)
        return [sorted(zero), sorted(one)]


# TESTS
for matches, expected in [
    (
        [
            [1, 3],
            [2, 3],
            [3, 6],
            [5, 6],
            [5, 7],
            [4, 5],
            [4, 8],
            [4, 9],
            [10, 4],
            [10, 9],
        ],
        [[1, 2, 10], [4, 5, 7, 8]],
    ),
    ([[2, 3], [1, 3], [5, 4], [6, 4]], [[1, 2, 5, 6], []]),
]:
    sol = Solution()
    actual = sol.findWinners(matches)
    print("Players with zero and one losses ->", actual)
    assert actual == expected
