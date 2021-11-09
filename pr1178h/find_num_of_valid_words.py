from typing import List
from collections import Counter
from itertools import combinations


class Solution:
    def findNumOfValidWords(
        self, words: List[str], puzzles: List[str]
    ) -> List[int]:
        count = Counter(frozenset(w) for w in words)
        ans = []
        for p in puzzles:
            cur = 0
            for k in range(7):
                for c in combinations(p[1:], k):
                    cur += count[frozenset(tuple(p[0]) + c)]
            ans.append(cur)
        return ans


for words, puzzles, expected in [
    (
        ["aaaa", "asas", "able", "ability", "actt", "actor", "access"],
        ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"],
        [1, 1, 3, 2, 4, 0],
    ),
    (
        ["apple", "pleas", "please"],
        ["aelwxyz", "aelpxyz", "aelpsxy", "saelpxy", "xaelpsy"],
        [0, 1, 3, 2, 0],
    ),
]:
    sol = Solution()
    actual = sol.findNumOfValidWords(words, puzzles)
    assert actual == expected
