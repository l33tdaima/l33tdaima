from random import randint

# The rand7() API is already defined for you.
# def rand7():
# @return a random integer in the range 1 to 7
def rand7():
    return randint(1, 7)


class Solution:
    def rand10(self) -> int:
        rand40 = 49
        while rand40 >= 40:
            rand40 = 7 * (rand7() - 1) + (rand7() - 1)
        return rand40 % 10 + 1


# TESTS
tests = [1, 2, 3]
for n in tests:
    sol = Solution()
    print("Generating", n, "rand10 ->", [sol.rand10() for _ in range(n)])
