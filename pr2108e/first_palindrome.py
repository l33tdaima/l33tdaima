class Solution:
    def firstPalindrome(self, words: list[str]) -> str:
        for w in words:
            if w == w[::-1]:
                return w
        return ""


# TESTS
for words, expected in [
    (["abc", "car", "ada", "racecar", "cool"], "ada"),
    (["notapalindrome", "racecar"], "racecar"),
    (["def", "ghi"], ""),
]:
    sol = Solution()
    actual = sol.firstPalindrome(words)
    print("The first palindrome in", words, "->", actual)
    assert actual == expected
