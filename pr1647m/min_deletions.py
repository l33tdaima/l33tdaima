from cmath import exp
from collections import Counter


class Solution:
    def minDeletions(self, s: str) -> int:
        ans, letter_freqs, used = 0, Counter(s), set()
        for _, f in letter_freqs.items():
            while f > 0 and f in used:
                f -= 1
                ans += 1
            used.add(f)
        return ans


# TESTS
for s, expected in [
    ("aab", 0),
    ("aaabbbcc", 2),
    ("ceabaacb", 2),
]:
    sol = Solution()
    actual = sol.minDeletions(s)
    print("The minimum deletions needed for", s, "->", actual)
    assert actual == expected
