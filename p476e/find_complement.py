class Solution:
    def findComplement(self, num: int) -> int:
        mask = ~0
        while num & mask:
            mask <<= 1
        return ~mask ^ num

    def findComplementV2(self, num: int) -> int:
        return num ^ ((1 << num.bit_length()) - 1)


# TESTS
for num, expected in [
    [5, 2],
    [1, 0],
    [7, 0],
    [534, 489],
    [10001, 6382],
    [999999, 48576],
    [12345678, 4431537],
]:
    sol = Solution()
    actual = sol.findComplement(num)
    print("Complement of", num, "->", actual)
    assert actual == expected == sol.findComplementV2(num)
