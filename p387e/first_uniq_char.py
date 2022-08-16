from cmath import exp
from collections import Counter
from unittest import expectedFailure


class Solution:
    def firstUniqChar(self, s: str) -> int:
        counter = Counter(s)
        for i, c in enumerate(s):
            if counter[c] == 1:
                return i
        return -1


# TESTS
for s, expected in [
    ["leetcode", 0],
    ["loveleetcode", 2],
    ["aabb", -1],
    ["teetcooce", -1],
    ["dddccdbba", 8],
]:
    sol = Solution()
    actual = sol.firstUniqChar(s)
    print("First unique char of", s, "->", actual)
    assert actual == expected
