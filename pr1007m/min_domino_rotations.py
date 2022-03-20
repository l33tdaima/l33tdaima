class Solution:
    def minDominoRotations(self, tops: list[int], bottoms: list[int]) -> int:
        for x in [tops[0], bottoms[0]]:
            if all(x in pair for pair in zip(tops, bottoms)):
                return len(tops) - max(tops.count(x), bottoms.count(x))
        return -1


# TESTS
for tops, bottoms, expected in [
    ([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2], 2),
    ([3, 5, 1, 2, 3], [3, 6, 3, 3, 4], -1),
]:
    sol = Solution()
    actual = sol.minDominoRotations(tops, bottoms)
    print("The minimum number of rotations in", tops, bottoms, "->", actual)
    assert actual == expected
