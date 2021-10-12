# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:


class Solution:
    def __init__(self, pick: int):
        self.pick = pick

    def guessNumber(self, n: int) -> int:
        def guess(num: int) -> int:
            if num == self.pick:
                return 0
            return (self.pick - num) // abs(self.pick - num)

        l, r = 1, n
        while l <= r:
            m = (l + r) // 2
            gm = guess(m)
            if gm == 0:
                return m
            elif gm > 0:
                l = m + 1
            else:
                r = m - 1
        return -1


# TESTS
for n, pick in [
    (10, 6),
    (1, 1),
    (2, 1),
]:
    sol = Solution(pick)
    actual = sol.guessNumber(n)
    print("Guess from n =", n, "->", actual)
    assert actual == pick
