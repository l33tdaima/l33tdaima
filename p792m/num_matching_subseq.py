from typing import List
from collections import defaultdict


class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        waiting = defaultdict(list)
        for w in words:
            waiting[w[0]].append(iter(w[1:]))
        for c in s:
            for it in waiting.pop(c, ()):
                waiting[next(it, None)].append(it)
        return len(waiting[None])


# TESTS
for s, words, expected in [
    ("abcde", ["a", "bb", "acd", "ace"], 3),
    ("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"], 2),
]:
    sol = Solution()
    actual = sol.numMatchingSubseq(s, words)
    print("Number of subsequences in", words, "matching", s, "->", actual)
    assert actual == expected

