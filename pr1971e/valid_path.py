class Solution:
    class UnionFind:
        def __init__(self, n: int):
            self._root = [i for i in range(n)]

        def root(self, i: int) -> int:
            while self._root[i] != i:
                self._root[i] = self._root[self._root[i]]  # path compression
                i = self._root[i]
            return i

        def union(self, i: int, j: int) -> None:
            p, q = self.root(i), self.root(j)
            self._root[p] = q

        def find(self, i: int, j: int) -> bool:
            return self.root(i) == self.root(j)

    def validPath(
        self, n: int, edges: list[list[int]], source: int, destination: int
    ) -> bool:
        uf = Solution.UnionFind(n)
        for i, j in edges:
            uf.union(i, j)
        return uf.find(source, destination)


# TESTS
for n, edges, source, destination, expected in [
    (3, [[0, 1], [1, 2], [2, 0]], 0, 2, True),
    (6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5, False),
]:
    sol = Solution()
    actual = sol.validPath(n, edges, source, destination)
    print(
        "There is a valid path from", source, "to", destination, "->", actual
    )
