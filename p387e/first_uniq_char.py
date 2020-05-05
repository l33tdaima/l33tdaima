from collections import Counter


class Solution:
    def firstUniqChar(self, s: str) -> int:
        counter = Counter(s)
        for i, c in enumerate(s):
            if counter[c] == 1:
                return i
        return -1


# TESTS
tests = [
    ["leetcode", 0],
    ["teetcooce", -1],
    ["dddccdbba", 8],
    ["loveleetcode", 2],
]
for t in tests:
    sol = Solution()
    actual = sol.firstUniqChar(t[0])
    print("First unique char of", t[0], "->", actual)
    assert actual == t[1]
