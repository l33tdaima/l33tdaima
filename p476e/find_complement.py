class Solution:
    def findComplement(self, num: int) -> int:
        i = 1
        while num >= i:
            num ^= i
            i <<= 1
        return num

    def findComplementV2(self, num: int) -> int:
        return num ^ ((1 << num.bit_length()) - 1)


# TESTS
tests = [
    [5, 2],
    [1, 0],
    [7, 0],
    [534, 489],
    [10001, 6382],
    [999999, 48576],
    [12345678, 4431537],
]
for t in tests:
    sol = Solution()
    actual = sol.findComplement(t[0])
    assert actual == t[1] == sol.findComplementV2(t[0])
