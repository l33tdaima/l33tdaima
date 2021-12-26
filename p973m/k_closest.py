import heapq


class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        return heapq.nsmallest(k, points, lambda p: p[0] * p[0] + p[1] * p[1])


# TESTS
for points, k, expected in [
    (
        [
            [1, 3],
            [-2, 2],
        ],
        1,
        [[-2, 2]],
    ),
    (
        [
            [3, 3],
            [5, -1],
            [-2, 4],
        ],
        2,
        [[3, 3], [-2, 4]],
    ),
]:
    sol = Solution()
    actual = sol.kClosest(points, k)
    print("K closet points in", points, "->", actual)
    assert actual == expected
