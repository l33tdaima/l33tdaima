class Solution:
    def countSubstrings(self, s: str) -> int:
        ans = 0

        def count(l: int, r: int) -> None:
            nonlocal s, ans
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l, r, ans = l - 1, r + 1, ans + 1

        for i, _ in enumerate(s):
            count(i, i)
            count(i, i + 1)
        return ans


# TESTS
for s, expected in [
    ("aa", 3),
    ("ab", 2),
    ("aab", 4),
    ("aba", 4),
    ("aaa", 6),
    ("aaaa", 10),
]:
    sol = Solution()
    actual = sol.countSubstrings(s)
    print("# of palindromic substrings in", s, "->", actual)
    assert actual == expected
