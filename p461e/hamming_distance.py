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
tests = [
    [1, 1, 0],
    [2, 3, 1],
    [1, 4, 2],
    [4, 8, 2],
    [4, 9, 3],
    [4, 10, 3],
    [1, 19091801, 10],
]
for t in tests:
    sol = Solution()
    actual = sol.hammingDistanceV2(t[0], t[1])
    print("Hamming distance of", t[0], t[1], "->", actual)
    assert actual == t[2]
