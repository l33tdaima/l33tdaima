from typing import List


class Solution:
    def maxArea(
        self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]
    ) -> int:
        hc, vc = sorted(horizontalCuts), sorted(verticalCuts)
        return (
            max(h2 - h1 for h1, h2 in zip([0] + hc, hc + [h]))
            * max(v2 - v1 for v1, v2 in zip([0] + vc, vc + [w]))
            % (10 ** 9 + 7)
        )


# TESTS
for h, w, horizontalCuts, verticalCuts, expected in [
    (5, 4, [1, 2, 4], [1, 3], 4),
    (5, 4, [3, 1], [1], 6),
    (5, 4, [3], [3], 9),
]:
    sol = Solution()
    actual = sol.maxArea(h, w, horizontalCuts, verticalCuts)
    print(
        f"The maximum area cut from {h} x {w} cake by {horizontalCuts} and {verticalCuts} -> {actual}"
    )
    assert actual == expected
