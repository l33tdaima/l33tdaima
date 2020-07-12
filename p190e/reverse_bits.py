class Solution:
    def reverseBits(self, n: int) -> int:
        ans = 0
        for i in range(32):
            ans = (ans << 1) | (n & 1)
            n >>= 1
        return ans


# TESTS
tests = [
    (0b00000010100101000001111010011100, 0b00111001011110000010100101000000),
    (0b11111111111111111111111111111101, 0b10111111111111111111111111111111),
]
for t in tests:
    sol = Solution()
    actual = sol.reverseBits(t[0])
    print(f"Reverse bits {t[0]:032b} -> {actual:032b}")
    assert actual == t[1]
