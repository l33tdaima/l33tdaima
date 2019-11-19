class Solution:
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        while l < r and s[l] == s[r]:
            l, r = l + 1, r - 1
        s = s[l : r + 1]
        return s[1:] == s[1:][::-1] or s[:-1] == s[:-1][::-1]


# TESTS
tests = [
    (
        "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga",
        True,
    ),
    ("", True),
    ("aaaa", True),
    ("aba", True),
    ("abca", True),
    ("abcea", False),
    ("bacca", True),
    ("accab", True),
    ("acdef", False),
]
for t in tests:
    sol = Solution()
    act = sol.validPalindrome(t[0])
    print("Can we make", t[0], "a palindrome with at most 1 removal? ->", act)
    assert act == t[1]
