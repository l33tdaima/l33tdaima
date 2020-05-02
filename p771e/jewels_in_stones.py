from functools import reduce


class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
        jset = set(J)
        return reduce(lambda x, s: x + 1 if s in jset else x, S, 0)


# TESTS
tests = [
    ["z", "ZZ", 0],
    ["aA", "aAAbbbb", 3],
]
for t in tests:
    sol = Solution()
    actual = sol.numJewelsInStones(t[0], t[1])
    print("# of jewels", t[0], "in stones", t[1], "->", actual)
    assert actual == t[2]
