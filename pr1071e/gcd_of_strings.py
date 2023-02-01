class Solution:
    def mod(self, dividend: str, divisor: str) -> str:
        dlen = len(divisor)
        while len(dividend) >= dlen:
            if dividend[:dlen] != divisor:
                break
            dividend = dividend[dlen:]
        return dividend

    def gcdOfStringsV1(self, str1: str, str2: str) -> str:
        if str2 == "":
            return str1
        if str1 + str2 != str2 + str1:
            return ""
        return self.gcdOfStringsV1(str2, self.mod(str1, str2))

    def gcdOfStringsV2(self, str1: str, str2: str) -> str:
        def gcd(a: int, b: int) -> int:
            if b == 0:
                return a
            return gcd(b, a % b)

        return (
            str1[: gcd(len(str1), len(str2))]
            if str1 + str2 == str2 + str1
            else ""
        )


# TESTS
for str1, str2, expected in [
    ("ABCABC", "ABC", "ABC"),
    ("ABABAB", "ABAB", "AB"),
    ("ABAB", "ABABAB", "AB"),
    ("LEET", "CODE", ""),
    ("AAAAAAAAA", "AAACCC", ""),
]:
    sol = Solution()
    actual = sol.gcdOfStringsV2(str1, str2)
    print("gcd of strings", str1, str2, "->", actual)
    assert actual == expected
    assert expected == sol.gcdOfStringsV1(str1, str2)
