class Solution:
    def wordPatternV1(self, pattern: str, str: str) -> bool:
        p2s, s2p, words = {}, {}, str.split()
        if len(pattern) != len(words):
            return False
        for p, s in zip(pattern, words):
            if p in p2s and p2s[p] != s:
                return False
            else:
                p2s[p] = s
            if s in s2p and s2p[s] != p:
                return False
            else:
                s2p[s] = p
        return True

    def wordPatternV2(self, pattern: str, str: str) -> bool:
        # map the element of iterable xs to the index of first appearance
        f = lambda xs: map({}.setdefault, xs, range(len(xs)))
        return list(f(pattern)) == list(f(str.split()))


# TESTS
tests = [
    ("aaa", "aa aa aa aa", False),
    ("abba", "dog cat cat dog", True),
    ("abba", "dog cat cat fish", False),
    ("aaaa", "dog cat cat dog", False),
    ("abba", "dog dog dog dog", False),
]
for pattern, string, expected in tests:
    sol = Solution()
    actual = sol.wordPatternV1(pattern, string)
    print("String", string, "follows the same pattern", pattern, "->", actual)
    assert actual == expected
    assert expected == sol.wordPatternV2(pattern, string)
