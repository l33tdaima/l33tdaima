class Solution:
    def reorderedPowerOf2(self, N: int) -> bool:
        return sorted(str(N)) in [sorted(str(1 << i)) for i in range(30)]


# TESTS
for N, expected in [
    (1, True),
    (10, False),
    (16, True),
    (61, True),
    (24, False),
    (46, True),
]:
    sol = Solution()
    actual = sol.reorderedPowerOf2(N)
    print(N, "is a reordered power of 2 ->", actual)
    assert actual == expected
