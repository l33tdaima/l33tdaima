class Solution:
    def isPathCrossing(self, path: str) -> bool:
        DIR = {
            "N": (0, 1),
            "S": (0, -1),
            "E": (1, 0),
            "W": (-1, 0),
        }
        visited = {(0, 0)}
        x, y = 0, 0
        for d in path:
            x, y = x + DIR[d][0], y + DIR[d][1]
            if (x, y) in visited:
                return True
            visited.add((x, y))
        return False


# TESTS
for path, expected in [
    ("NES", False),
    ("NESWW", True),
]:
    sol = Solution()
    actual = sol.isPathCrossing(path)
    print("Is path", path, "crossing ->", actual)
    assert actual == expected
