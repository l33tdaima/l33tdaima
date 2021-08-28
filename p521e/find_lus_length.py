class Solution:
    def findLUSlength(self, a: str, b: str) -> int:
        return -1 if a == b else max(len(a), len(b))


# TESTS
for a, b, expected in [
    ("aba", "cdc", 3),
    ("acdc", "cdc", 4),
    ("aaa", "bbb", 3),
    ("aaa", "aaa", -1),
]:
    sol = Solution()
    actual = sol.findLUSlength(a, b)
    assert actual == expected
