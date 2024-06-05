from collections import Counter
from functools import reduce


class Solution:
    def commonChars(self, words: list[str]) -> list[str]:
        return reduce(lambda x, y: Counter(x) & Counter(y), words).elements()


# TESTS
for words, expected in [
    (["bella", "label", "roller"], ["e", "l", "l"]),
    (["cool", "lock", "cook"], ["c", "o"]),
]:
    sol = Solution()
    actual = sol.commonChars(words)
    assert sorted(actual) == sorted(expected)
