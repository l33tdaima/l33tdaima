class Solution:
    def isUgly(self, num: int) -> bool:
        if num <= 0:
            return False
        if num == 1:
            return True
        for p in 5, 3, 2:
            if num % p == 0:
                return self.isUgly(num // p)
        return False

    def isUglyV2(self, num: int) -> bool:
        for p in 5, 3, 2:
            while num > 0 and num % p == 0:
                num /= p
        return num == 1


# TESTS
for num, expected in [
    (1, True),
    (6, True),
    (8, True),
    (10, True),
    (11, False),
    (14, False),
    (70, False),
]:
    sol = Solution()
    actual = sol.isUgly(num)
    print("Is", num, "ugly ->", actual)
    assert actual == actual == sol.isUglyV2(num)
