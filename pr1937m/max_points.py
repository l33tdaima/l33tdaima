class Solution:
    def maxPoints(self, points: list[list[int]]) -> int:
        M, N = len(points), len(points[0])

        def getLeft(xs: list[int]) -> list[int]:
            left = [xs[0]] + [0] * (N - 1)
            for i in range(1, N):
                left[i] = max(left[i - 1] - 1, xs[i])
            return left

        def getRight(xs: list[int]) -> list[int]:
            right = [0] * (N - 1) + [xs[-1]]
            for i in range(N - 2, -1, -1):
                right[i] = max(right[i + 1] - 1, xs[i])
            return right

        pre = points[0]
        for m in range(1, M):
            cur, left, right = [0] * N, getLeft(pre), getRight(pre)
            for i in range(N):
                cur[i] = max(left[i], right[i]) + points[m][i]
            pre = cur[:]
        return max(pre)


# TESTS
for points, expected in [
    ([[1, 2, 3], [1, 5, 1], [3, 1, 1]], 9),
    ([[1, 5], [2, 3], [4, 2]], 11),
]:
    sol = Solution()
    actual = sol.maxPoints(points)
    print("The maximum score of points achieved from", points, "->", actual)
    assert actual == expected
