from typing import List
from functools import reduce


class Solution:
    def getPermutationV1(self, n: int, k: int) -> str:
        nums = [str(i) for i in range(1, n + 1)]
        seq, kth = 0, []
        visited = [False] * n

        def backtrack(path: List[int]) -> List[int]:
            nonlocal seq, kth
            if len(path) == n:
                seq = seq + 1
                if seq == k:
                    kth = list(path)
                return
            for i in range(n):
                if visited[i]:
                    continue
                visited[i] = True
                path.append(nums[i])
                if seq == k:
                    return
                backtrack(path)
                path.pop()
                visited[i] = False

        backtrack([])
        return "".join(kth)

    def getPermutationV2(self, n: int, k: int) -> str:
        if n == 1 and k == 1:
            return "1"
        nums = [i for i in range(1, n + 1)]
        fact = reduce(lambda a, b: a * b, nums)
        ans = []
        k = k - 1
        for f in range(n, 0, -1):
            fact = fact // f
            i = k // fact
            ans.append(str(nums.pop(i)))
            k = k - fact * i
        return "".join(ans)


# TESTS
tests = [
    (1, 1, "1"),
    (2, 2, "21"),
    (3, 1, "123"),
    (3, 3, "213"),
    (4, 9, "2314"),
    (8, 25212, "61235874"),
    (9, 214267, "635749128"),
]

for t in tests:
    sol = Solution()
    actual = sol.getPermutationV1(t[0], t[1])
    assert actual == t[2]
    actual = sol.getPermutationV2(t[0], t[1])
    print("The", t[1], "permutation sequence of order", t[0], "->", actual)
    assert actual == t[2]

