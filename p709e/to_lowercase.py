class Solution:
    def toLowerCase(self, s: str) -> str:
        return "".join(chr(ord(c) + 32) if "A" <= c <= "Z" else c for c in s)


# TESTS
for s, expected in [
    ("Hello", "hello"),
    ("here", "here"),
    ("LOVELY", "lovely"),
]:
    sol = Solution()
    actual = sol.toLowerCase(s)
    print(f"toLowerCase({s}) -> {actual}")
    assert actual == expected
