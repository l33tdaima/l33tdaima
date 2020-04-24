class Solution:
    # This algorithm iterates from MSB
    def rangeBitwiseAndMSB(self, m: int, n: int) -> int:
        ans, mask = 0, 0x100000000
        while mask > 0:
            mask = mask >> 1
            # print(bin(mask), (m & mask), (n & mask))
            if m & mask == mask and n & mask == mask:
                ans = ans | mask
            elif (m & mask) ^ (n & mask):
                break
        return ans

    # This algorithm iterates from LSB and faster
    def rangeBitwiseAndLSB(self, m: int, n: int) -> int:
        i = 0  # how many bit right shifted
        while m != n:
            m >>= 1
            n >>= 1
            i += 1
        return m << i


# TESTS
tests = [[5, 7, 4], [0, 1, 0], [26, 30, 24]]
for t in tests:
    sol = Solution()
    actual = sol.rangeBitwiseAndMSB(t[0], t[1])
    print("Bitwise AND of all numbers in range", f"[{t[0]}, {t[1]}] ->", actual)
    assert actual == t[2]
    assert t[2] == sol.rangeBitwiseAndLSB(t[0], t[1])
