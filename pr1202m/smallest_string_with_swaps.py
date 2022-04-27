from collections import defaultdict


class UnionFind:
    def __init__(self, n):
        self.p = list(range(n))

    def union(self, x, y):
        self.p[self.find(x)] = self.find(y)

    def find(self, x):
        if x != self.p[x]:
            self.p[x] = self.find(self.p[x])
        return self.p[x]


class Solution:
    def smallestStringWithSwaps(self, s: str, pairs: list[list[int]]) -> str:
        uf, ans, connected = UnionFind(len(s)), [], defaultdict(list)
        for x, y in pairs:
            uf.union(x, y)
        for i in range(len(s)):
            connected[uf.find(i)].append(s[i])
        for root in connected.keys():
            connected[root].sort(reverse=True)
        for i in range(len(s)):
            ans.append(connected[uf.find(i)].pop())
        return "".join(ans)


for s, pairs, expected in [
    ("dcab", [[0, 3], [1, 2]], "bacd"),
    ("dcab", [[0, 3], [1, 2], [0, 2]], "abcd"),
    ("cba", [[0, 1], [1, 2]], "abc"),
]:
    sol = Solution()
    actual = sol.smallestStringWithSwaps(s, pairs)
    print("The smallest string ", s, "with swap by", pairs, "->", actual)
    assert actual == expected
