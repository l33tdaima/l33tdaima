class Solution:
    def findJudge(self, n: int, trust: list[list[int]]) -> int:
        trusted = [0] * (n + 1)
        for i, j in trust:
            trusted[i] -= 1
            trusted[j] += 1
        for i in range(1, n + 1):
            if trusted[i] == n - 1:
                return i
        return -1


# TESTS
for n, trust, expected in [
    (1, [], 1),
    (2, [[1, 2]], 2),
    (3, [[1, 3], [2, 3]], 3),
    (3, [[1, 3], [2, 3], [3, 1]], -1),
    (3, [[1, 2], [2, 3]], -1),
    (4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]], 3),
]:
    sol = Solution()
    actual = sol.findJudge(n, trust)
    print("The town judge of n =", n, "->", actual)
    assert actual == expected
