class Solution:
    def hammingDistanceV1(self, x: int, y: int) -> int:
        ans, xor = 0, x ^ y
        while xor:
            ans += 1 if xor & 1 else 0
            xor >>= 1
        return ans

    def hammingDistanceV2(self, x: int, y: int) -> int:
        ans, xor = 0, x ^ y
        while xor:
            ans += 1
            xor &= xor - 1
        return ans


# TESTS
for x, y, expected in [
    [1, 1, 0],
    [2, 3, 1],
    [1, 4, 2],
    [4, 8, 2],
    [4, 9, 3],
    [4, 10, 3],
    [1, 19091801, 10],
]:
    sol = Solution()
    actual = sol.hammingDistanceV2(x, y)
    print("Hamming distance of", x, y, "->", actual)
    assert actual == expected
