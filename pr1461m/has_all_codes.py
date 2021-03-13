class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        return len({s[i : i + k] for i in range(0, len(s) - k + 1)}) == 2 ** k


# TESTS
for s, k, expected in [
    ("00110110", 2, True),
    ("00110", 2, True),
    ("0110", 1, True),
    ("0110", 2, False),
    ("0000000001011100", 4, False),
]:
    sol = Solution()
    actual = sol.hasAllCodes(s, k)
    print(f"{s} contains all binary codes of size {k} -> {actual}")
    assert actual == expected
