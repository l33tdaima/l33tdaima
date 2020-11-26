class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        for c in set(s):
            if s.count(c) < k:
                return max(self.longestSubstring(t, k) for t in s.split(c))
        return len(s)


# TESTS
for s, k, expected in [
    ("aaabb", 3, 3),
    ("ababbc", 2, 5),
    ("ababbcc", 2, 7),
    ("ababbcaabb", 2, 5),
]:
    sol = Solution()
    actual = sol.longestSubstring(s, k)
    print("The longest substring in", s, "with k =", k, "->", actual)
    assert actual == expected
