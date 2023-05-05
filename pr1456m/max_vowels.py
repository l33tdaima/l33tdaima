class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        ans = vs = 0
        for i in range(len(s)):
            if s[i] in "aeiou":
                vs += 1
            if i >= k and s[i - k] in "aeiou":
                vs -= 1
            ans = max(vs, ans)
        return ans


# TESTS
for s, k, expected in [
    ("abciiidef", 3, 3),
    ("aeiou", 2, 2),
    ("leetcode", 3, 2),
    ("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33, 7),
]:
    sol = Solution()
    actual = sol.maxVowels(s, k)
    print("Max vowels in substring of length", k, "in", s, "->", actual)
    assert actual == expected
