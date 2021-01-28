class Solution:
    def concatenatedBinary(self, n: int) -> int:
        s = 0
        for i in range(1, n + 1):
            s = ((s << (len(bin(i)) - 2)) + i) % 1000000007
        return s


# TESTS
for n, expected in [
    (1, 1),
    (3, 27),
    (12, 505379714),
]:
    sol = Solution()
    actual = sol.concatenatedBinary(n)
    print("Concatenation of consecutive binary of 1 to", n, "->", actual)
    assert actual == expected
