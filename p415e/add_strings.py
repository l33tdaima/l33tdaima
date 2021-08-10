from itertools import zip_longest


class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        ans, carry = [], 0
        for c1, c2 in zip_longest(num1[::-1], num2[::-1], fillvalue="0"):
            s = ord(c1) - ord("0") + ord(c2) - ord("0") + carry
            carry = s // 10
            ans.append(str(s % 10))
        if carry > 0:
            ans.append(str(carry))
        return "".join(ans[::-1])


# TESTS
for num1, num2, expected in [
    ("11", "123", "134"),
    ("456", "77", "533"),
    ("0", "0", "0"),
    ("1", "9", "10"),
]:
    sol = Solution()
    actual = sol.addStrings(num1, num2)
    print(num1, "+", num2, "=", actual)
    assert actual == expected
