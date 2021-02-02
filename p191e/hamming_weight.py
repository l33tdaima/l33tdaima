class Solution:
    def hammingWeight(self, n: int) -> int:
        ans = 0
        while n:
            n &= n - 1
            ans += 1
        return ans


# TESTS
for n, expected in [
    (0b00000000000000000000000000001011, 3),
    (0b00000000000000000000000010000000, 1),
    (0b11111111111111111111111111111101, 31),
]:
    sol = Solution()
    actual = sol.hammingWeight(n)
    print("Hamming weight of", bin(n), "->", actual)
    assert actual == expected
