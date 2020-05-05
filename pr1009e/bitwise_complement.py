class Solution:
    def bitwiseComplement(self, N: int) -> int:
        i = 1
        while i < N:
            i = (i << 1) + 1
        return i ^ N  # i - N

    def bitwiseComplementV2(self, N: int) -> int:
        return N ^ ((1 << N.bit_length()) - 1)


# TESTS
tests = [
    [5, 2],
    [1, 0],
    [7, 0],
    [10, 5],
    [534, 489],
    [10001, 6382],
    [999999, 48576],
    [12345678, 4431537],
]
for t in tests:
    sol = Solution()
    actual = sol.bitwiseComplement(t[0])
    assert actual == t[1] == sol.bitwiseComplementV2(t[0])
