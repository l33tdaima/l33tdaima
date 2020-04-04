class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 1:
            return False
        sum, i = 1, 2
        while i * i < num:
            if num % i == 0:
                sum += i + num / i
            i += 1
            if sum > num:
                return False
        # add only once for perfect square,
        # even without it, it doesn't give false result in the given range
        if i * i == num:
            sum += i
        return sum == num


# TESTS
tests = [
    [1, False],
    [6, True],
    [28, True],
    [34, False],
    [496, True],
    [8128, True],
    [33550336, True],
]
for t in tests:
    sol = Solution()
    actual = sol.checkPerfectNumber(t[0])
    print("Is", t[0], "a perfect number? ->", actual)
    assert actual == t[1]
