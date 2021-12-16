class Solution:
    def findMinHeightTrees(self, n: int, edges: list[list[int]]) -> list[int]:
        if n == 1:
            return [0]
        adj = [set() for _ in range(n)]
        for i, j in edges:
            adj[i].add(j)
            adj[j].add(i)

        leaves = [i for i in range(n) if len(adj[i]) == 1]

        while n > 2:
            n -= len(leaves)
            nleaves = []
            for i in leaves:
                root = adj[i].pop()
                adj[root].remove(i)
                if len(adj[root]) == 1:
                    nleaves.append(root)
            leaves = nleaves
        return leaves


# TESTS
for n, edges, expected in [
    (1, [], [0]),
    (2, [[0, 1]], [0, 1]),
    (6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]], [3, 4]),
]:
    sol = Solution()
    actual = sol.findMinHeightTrees(n, edges)
    print("all MHTs' in", n, edges, "->", actual)
    assert actual == expected
