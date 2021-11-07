class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        result_list = [0] * (len(num1) + len(num2))
        for i, c1 in reversed(list(enumerate(num1))):
            for j, c2 in reversed(list(enumerate(num2))):
                msb, lsb = i + j, i + j + 1
                prod = int(c1) * int(c2)
                sum = prod + result_list[lsb]
                result_list[msb] += sum // 10
                result_list[lsb] = sum % 10
        p = 0
        while p < len(result_list) - 1 and result_list[p] == 0:
            p += 1
        return "".join(map(str, result_list[p:]))


# TESTS
for num1, num2, expected in [
    ["0", "987", "0"],
    ["2", "3", "6"],
    ["123", "456", "56088"],
    ["123", "45", "5535"],
]:
    sol = Solution()
    actual = sol.multiply(num1, num2)
    print(num1, "*", num2, "->", actual)
    assert actual == expected
