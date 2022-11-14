class Solution:
    def removeStones(self, stones: list[list[int]]) -> int:
        uf = {}

        def find(x: int) -> int:
            if x != uf[x]:
                uf[x] = find(uf[x])
            return uf[x]

        def union(x: int, y: int) -> None:
            uf.setdefault(x, x)
            uf.setdefault(y, y)
            uf[find(x)] = find(y)

        for x, y in stones:
            union(x, ~y)

        return len(stones) - len({find(uf[x]) for x in uf})


# TESTS
for stones, expected in [
    ([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]], 5),
    ([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]], 3),
    ([[0, 0]], 0),
]:
    sol = Solution()
    actual = sol.removeStones(stones)
    print("The largest possible number of removal in", stones, "->", actual)
    assert actual == expected
