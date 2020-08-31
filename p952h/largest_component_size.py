from typing import List, Set
from math import sqrt
from collections import defaultdict, Counter


class UnionFind:
    def __init__(self, N: int):
        self.id = list(range(N))

    def root(self, i: int) -> int:
        while self.id[i] != i:
            self.id[i] = self.id[self.id[i]]  # path compression
            i = self.id[i]
        return i

    def unite(self, p: int, q: int) -> None:
        root_p = self.root(p)
        root_q = self.root(q)
        self.id[root_p] = root_q


class Solution:
    def largestComponentSize(self, A: List[int]) -> int:
        def prime_set(n: int) -> Set[int]:
            for i in range(2, int(sqrt(n)) + 1):
                if n % i == 0:
                    return prime_set(n // i) | set([i])
            return set([n])

        N = len(A)
        uf = UnionFind(N)
        primes = defaultdict(list)

        for i, n in enumerate(A):
            for p in prime_set(n):
                primes[p].append(i)

        for _, ids in primes.items():
            for i in range(len(ids) - 1):
                uf.unite(ids[i], ids[i + 1])

        return max(Counter([uf.root(i) for i in range(N)]).values())


# TESTS
tests = [([4, 6, 15, 35], 4), ([20, 50, 9, 63], 2), ([2, 3, 6, 7, 4, 12, 21, 39], 8)]
for t in tests:
    sol = Solution()
    actual = sol.largestComponentSize(t[0])
    print("The size of the largest connected component in", t[0], "->", actual)
    assert actual == t[1]
