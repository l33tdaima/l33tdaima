from typing import List


class Solution:
    def findAndReplacePatternV1(self, words: List[str], pattern: str) -> List[str]:
        def matched(word: str, pattern: str) -> bool:
            w2p, p2w = dict(), dict()
            for w, p in zip(word, pattern):
                if w not in w2p and p not in p2w:
                    w2p[w] = p
                    p2w[p] = w
                elif w in w2p and p in p2w:
                    if w2p[w] != p or p2w[p] != w:
                        return False
                else:
                    return False
            return True

        return [w for w in words if matched(w, pattern)]

    def findAndReplacePatternV2(self, words: List[str], pattern: str) -> List[str]:
        def normalize(s: str) -> List[int]:
            m = {}
            return [m.setdefault(c, len(m)) for c in s]

        normp = normalize(pattern)
        return [w for w in words if normalize(w) == normp]


# TESTS
for words, pattern, expected in [
    (["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb", ["mee", "aqq"]),
    (["a", "b", "c"], "a", ["a", "b", "c"]),
]:
    sol = Solution()
    actual = sol.findAndReplacePatternV1(words, pattern)
    print("Words matching pattern", pattern, "->", actual)
    assert actual == expected
    assert expected == sol.findAndReplacePatternV2(words, pattern)
