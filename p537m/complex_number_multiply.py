from typing import Tuple


class Solution:
    def complexNumberMultiply(self, num1: str, num2: str) -> str:
        parse = lambda num: map(int, num[:-1].split("+", 1))
        r1, i1 = parse(num1)
        r2, i2 = parse(num2)
        return f"{r1 * r2 - i1 * i2}+{r1 * i2 + r2 * i1}i"


# TESTS
for num1, num2, expected in [
    ("1+1i", "1+1i", "0+2i"),
    ("1+-1i", "1+-1i", "0+-2i"),
]:
    sol = Solution()
    actual = sol.complexNumberMultiply(num1, num2)
    print(f"{num1} * {num2} = {actual}")
    assert actual == expected
