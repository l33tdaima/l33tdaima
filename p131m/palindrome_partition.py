class Solution:
    def partition(self, s: str) -> list[list[str]]:
        ans = []

        def dfs(s: str, path: list[str]) -> None:
            if not s:
                ans.append(path[:])
            else:
                for i in range(1, len(s) + 1):
                    if s[:i] == s[:i][::-1]:
                        path.append(s[:i])
                        dfs(s[i:], path)
                        path.pop()

        dfs(s, [])
        return ans


# TESTS
for s, expected in [
    (
        "aab",
        [
            ["a", "a", "b"],
            ["aa", "b"],
        ],
    ),
    ("a", [["a"]]),
]:
    sol = Solution()
    actual = sol.partition(s)
    print("All possible palindrome partitioning of", s, "->", actual)
    assert sorted(actual) == sorted(expected)
