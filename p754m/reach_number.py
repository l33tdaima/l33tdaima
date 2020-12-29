class Solution:
    def reachNumber(self, target: int) -> int:
        target = abs(target)
        step, s = 0, 0
        while s < target:
            step += 1
            s += step
        while (s - target) % 2 != 0:
            step += 1
            s += step
        return step


# TESTS
for target, expected in [
    (2, 3),
    (3, 2),
    (4, 3),
    (5, 5),
    (7, 5),
]:
    sol = Solution()
    actual = sol.reachNumber(target)
    print("The minimum steps to reach", target, "->", actual)
    assert actual == expected
