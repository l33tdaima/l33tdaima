class Solution:
    def countArrangement(self, n: int) -> int:
        ans = 0
        visited = [False] * (n + 1)

        def backtrack(path_pos: int) -> None:
            nonlocal ans
            if path_pos > n:
                ans += 1
                return
            for i in range(1, n + 1):
                if not visited[i] and (i % path_pos == 0 or path_pos % i == 0):
                    visited[i] = True
                    backtrack(path_pos + 1)
                    visited[i] = False

        backtrack(1)
        return ans


# TESTS
for n, expected in [
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 8),
    (5, 10),
    (6, 36),
    (7, 41),
    (10, 700),
]:
    sol = Solution()
    actual = sol.countArrangement(n)
    print("Beautiful arrangements in n =", n, "->", actual)
    assert actual == expected
