class Solution:
    def bitwiseComplement(self, n: int) -> int:
        i = 1
        while i < n:
            i = (i << 1) + 1
        return i ^ n  # i - n

    def bitwiseComplementV2(self, n: int) -> int:
        return n ^ ((1 << n.bit_length()) - 1) if n else 1


# TESTS
for n, expected in [
    [0, 1],
    [5, 2],
    [1, 0],
    [7, 0],
    [10, 5],
    [534, 489],
    [10001, 6382],
    [999999, 48576],
    [12345678, 4431537],
]:
    sol = Solution()
    actual = sol.bitwiseComplement(n)
    print("Complement of", n, "->", actual)
    assert actual == expected and sol.bitwiseComplementV2(n) == expected
