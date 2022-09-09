from curses.ascii import SO


class Solution:
    def numberOfWeakCharacters(self, properties: list[list[int]]) -> int:
        sp = sorted(properties, key=lambda x: (x[0], -x[1]))
        ans, mdef = 0, float("-inf")
        for at, de in sp[::-1]:
            if de < mdef:
                ans += 1
            mdef = max(mdef, de)
        return ans


# TESTS
for properties, expected in [
    ([[1, 1], [2, 1], [2, 2], [1, 2]], 1),
    (
        [
            [7, 7],
            [1, 2],
            [9, 7],
            [7, 3],
            [3, 10],
            [9, 8],
            [8, 10],
            [4, 3],
            [1, 5],
            [1, 5],
        ],
        6,
    ),
    ([[5, 5], [6, 3], [3, 6]], 0),
    ([[2, 2], [3, 3]], 1),
    ([[1, 5], [10, 4], [4, 3]], 1),
]:
    sol = Solution()
    actual = sol.numberOfWeakCharacters(properties)
    print("# of weak in", properties, "->", actual)
    assert actual == expected
