class Solution:
    def countArrangement(self, N: int) -> int:
        ans = 0
        visited = [False] * (N + 1)

        def backtrack(path_pos: int) -> None:
            nonlocal ans
            if path_pos > N:
                ans += 1
                return
            for n in range(1, N + 1):
                if not visited[n] and (n % path_pos == 0 or path_pos % n == 0):
                    visited[n] = True
                    backtrack(path_pos + 1)
                    visited[n] = False

        backtrack(1)
        return ans


# TESTS
tests = [(1, 1), (2, 2), (3, 3), (4, 8)]
for t in tests:
    sol = Solution()
    actual = sol.countArrangement(t[0])
    print("Beautiful arrangements in N =", t[0], "->", actual)
    assert t[1] == actual
