from typing import List


class Solution:
    def slowestKey(self, releaseTimes: List[int], keysPressed: str) -> str:
        mk, mt = None, 0
        for k, t, tm1 in zip(keysPressed, releaseTimes, [0] + releaseTimes):
            if t - tm1 > mt or (t - tm1 == mt and k > mk):
                mk, mt = k, t - tm1
        return mk

    def slowestKey1Line(self, releaseTimes: List[int], keysPressed: str) -> str:
        return max(
            zip(
                map(lambda x, y: x - y, releaseTimes, [0, *releaseTimes]),
                keysPressed,
            )
        )[1]


# TESTS
for releaseTimes, keysPressed, expected in [
    ([9, 29, 49, 50], "cbcd", "c"),
    ([12, 23, 36, 46, 62], "spuda", "a"),
]:
    sol = Solution()
    actual = sol.slowestKey(releaseTimes, keysPressed)
    print("Slowest key in", releaseTimes, keysPressed, "->", actual)
    assert actual == expected
    assert sol.slowestKey1Line(releaseTimes, keysPressed) == expected
