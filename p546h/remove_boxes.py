from typing import List


class Solution:
    def removeBoxes(self, boxes: List[int]) -> int:
        dp = dict()  # key by (i, j, k)

        def helper(i: int, j: int, k: int) -> int:
            if i > j:
                return 0
            if (i, j, k) in dp:
                return dp[(i, j, k)]
            # optimization: all boxes of the same color counted continuously from the first box should be grouped together
            i0, k0 = i, k
            while i < j and boxes[i] == boxes[i + 1]:
                i, k = i + 1, k + 1
            res = (k + 1) * (k + 1) + helper(i + 1, j, 0)
            for m in range(i + 1, j + 1):
                if boxes[i] == boxes[m]:
                    res = max(res, helper(i + 1, m - 1, 0) + helper(m, j, k + 1))
            dp[(i0, j, k0)] = res
            return res

        return helper(0, len(boxes) - 1, 0)


# TESTS
for boxes, expected in [
    ([1, 3, 2, 2, 2, 3, 4, 3, 1], 23),
    ([1, 1, 1], 9),
    ([1], 1),
]:
    sol = Solution()
    actual = sol.removeBoxes(boxes)
    print("The max points in removing boxes", boxes, "->", actual)
    assert actual == expected
