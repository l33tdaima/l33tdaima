class Solution:
    def angleClock(self, hour: int, minutes: int) -> float:
        angle_mm = minutes / 60 * 360
        angle_hh = (hour % 12) / 12 * 360 + minutes / 60 * 30
        ans = abs(angle_mm - angle_hh)
        return ans if ans < 180.0 else 360 - ans


# TESTS
tests = [
    (12, 30, 165),
    (3, 30, 75),
    (3, 15, 7.5),
    (4, 50, 155),
    (12, 0, 0),
    (1, 55, 87.5),
]

for t in tests:
    sol = Solution()
    actual = sol.angleClock(t[0], t[1])
    print(f"Smaller angle of {t[0]}:{t[1]} -> {actual}")
    assert abs(actual - t[2]) < 1e-5
