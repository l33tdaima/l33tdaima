class Solution:
    def destCity(self, paths: list[list[str]]) -> str:
        src, dest = map(set, zip(*paths))
        return (dest - src).pop()


# TESTS
for paths, expected in [
    (
        [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]],
        "Sao Paulo",
    ),
    ([["B", "C"], ["D", "B"], ["C", "A"]], "A"),
    ([["A", "Z"]], "Z"),
]:
    sol = Solution()
    actual = sol.destCity(paths)
    assert actual == expected
