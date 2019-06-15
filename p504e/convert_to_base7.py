class Solution:
    def convertToBase7(self, num: int) -> str:
        if (num == 0):
            return "0"
        rem, ans = abs(num), ""
        while rem > 0:
            ans = str(rem % 7) + ans
            rem = rem // 7
        return ans if num >= 0 else "-" + ans
# TESTS
tests = [
    (0, "0"),
    (5, "5"),
    (24, "33"),
    (100, "202"),
    (-7, "-10")
]
for t in tests:
    sol = Solution()
    actual = sol.convertToBase7(t[0])
    print("Convert", t[0], "to base 7 ->", actual)
    assert(actual == t[1])
