class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        x, y, dx, dy = 0, 0, 0, 1
        for i in instructions:
            if i == "L":
                dx, dy = -dy, dx
            elif i == "R":
                dx, dy = dy, -dx
            else:
                x, y = x + dx, y + dy
        return (x, y) == (0, 0) or (dx, dy) != (0, 1)


# TESTS
for instructions, expected in [
    ("GGLLGG", True),
    ("GG", False),
    ("GL", True),
]:
    sol = Solution()
    actual = sol.isRobotBounded(instructions)
    print(
        "Robot bounded in circle with instruction", instructions, "->", actual
    )
    assert actual == expected
