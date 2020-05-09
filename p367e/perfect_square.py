class Solution:
    def isPerfectSquareLinear(self, num: int) -> bool:
        n, sq = 0, 0
        while sq <= num:
            n += 1
            sq = n * n
            if sq == num:
                return True
        return False

    def isPerfectSquareMath(self, num: int) -> bool:
        i = 1
        while num > 0:
            num -= i
            i += 2
        return num == 0

    def isPerfectSquareNewton(self, num: int) -> bool:
        x = num
        while x * x > num:
            x = (x + num / x) // 2
        return x * x == num


# TESTS
tests = [
    [1, True],
    [2, False],
    [14, False],
    [16, True],
    [255, False],
    [256, True],
]
for t in tests:
    sol = Solution()
    print("Is", t[0], "perfect square? ->", t[1])
    assert t[1] == sol.isPerfectSquareLinear(t[0])
    assert t[1] == sol.isPerfectSquareMath(t[0])
    assert t[1] == sol.isPerfectSquareNewton(t[0])
