class Solution:
    def intToRoman(self, num: int) -> str:
        M = ["", "M", "MM", "MMM"]
        C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
        X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
        I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
        return M[num // 1000] + C[num % 1000 // 100] + X[num % 100 // 10] + I[num % 10]


# TESTS
for num, expected in [
    (3, "III"),
    (4, "IV"),
    (9, "IX"),
    (58, "LVIII"),
    (1994, "MCMXCIV"),
]:
    sol = Solution()
    actual = sol.intToRoman(num)
    print("Int", num, "to roman ->", actual)
    assert actual == expected
