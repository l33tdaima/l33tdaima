class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        half, vowels = len(s) // 2, set("aeiouAEIOU")
        a = sum(1 for c in s[0:half] if c in vowels)
        b = sum(1 for c in s[half:] if c in vowels)
        return a == b


# TESTS
for s, expected in [
    ("book", True),
    ("textbook", False),
    ("MerryChristmas", False),
    ("AbCdEfGh", True),
]:
    sol = Solution()
    actual = sol.halvesAreAlike(s)
    print("String", s, "halves are alike ->", actual)
    assert actual == expected
