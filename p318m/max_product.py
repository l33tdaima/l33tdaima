from typing import List
from functools import lru_cache


class Solution:
    def maxProduct(self, words: List[str]) -> int:
        mask = {}
        for word in words:
            key = 0
            for c in word:
                key |= 1 << (ord(c) - 97)
            mask[key] = max(mask.get(key, 0), len(word))

        return max([mask[x] * mask[y] for x in mask for y in mask if not x & y] or [0])


# TESTS
for words, expected in [
    (["abcw", "baz", "foo", "bar", "xtfn", "abcdef"], 16),
    (["a", "ab", "abc", "d", "cd", "bcd", "abcd"], 4),
    (["a", "aa", "aaa", "aaaa"], 0),
]:
    sol = Solution()
    actual = sol.maxProduct(words)
    print("Maximum product of distinct word lengths in", words, "->", actual)
    assert actual == expected
