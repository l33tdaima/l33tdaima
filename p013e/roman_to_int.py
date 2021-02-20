class Solution:
    def romanToInt(self, s: str) -> int:
        VALUE_MAP = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        ans = 0
        for i in range(0, len(s) - 1):
            cur = VALUE_MAP[s[i]]
            if cur < VALUE_MAP[s[i + 1]]:
                ans -= cur
            else:
                ans += cur
        return ans + VALUE_MAP[s[-1]]


# TESTS
for s, expected in [
    ["III", 3],
    ["IV", 4],
    ["VII", 7],
    ["IX", 9],
    ["LVIII", 58],
    ["XCIX", 99],
    ["DCCCXC", 890],
    ["MCMXCIV", 1994],
]:
    sol = Solution()
    actual = sol.romanToInt(s)
    print("Roman", s, "to int ->", actual)
    assert actual == expected
