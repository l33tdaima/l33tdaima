from string import ascii_lowercase


class UnionFind:
    def __init__(self):
        self.parent = {c: c for c in ascii_lowercase}

    def root(self, i: str) -> str:
        while self.parent[i] != i:
            self.parent[i] = self.parent[self.parent[i]]  # path compression
            i = self.parent[i]
        return i

    def union(self, i: str, j: str) -> None:
        ri, rj = self.root(i), self.root(j)
        # make the root the lexicographically smallest
        if ri < rj:
            self.parent[rj] = ri
        else:
            self.parent[ri] = rj


class Solution:
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
        uf = UnionFind()
        for c1, c2 in zip(s1, s2):
            uf.union(c1, c2)
        return "".join([uf.root(c) for c in baseStr])


# TESTS
for s1, s2, baseStr, expected in [
    ("parker", "morris", "parser", "makkek"),
    ("hello", "world", "hold", "hdld"),
    ("leetcode", "programs", "sourcecode", "aauaaaaada"),
]:
    sol = Solution()
    actual = sol.smallestEquivalentString(s1, s2, baseStr)
    print(
        "The lexicographically smallest equivalent of", baseStr, "->", actual
    )
    assert actual == expected
