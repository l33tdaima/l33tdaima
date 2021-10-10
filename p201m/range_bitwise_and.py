class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        i = 0  # how many bit right shifted
        while left != right:
            left >>= 1
            right >>= 1
            i += 1
        return left << i


# TESTS
for left, right, expected in [
    (5, 7, 4),
    (0, 1, 0),
    (26, 30, 24),
]:
    sol = Solution()
    actual = sol.rangeBitwiseAnd(left, right)
    print("Bitwise AND of all numbers in range", f"[{left}, {right}] ->", actual)
    assert actual == expected
