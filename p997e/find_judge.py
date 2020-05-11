from typing import List


class Solution:
    def findJudge(self, N: int, trust: List[List[int]]) -> int:
        trusted = [0] * (N + 1)
        for i, j in trust:
            trusted[i] -= 1
            trusted[j] += 1
        for i in range(1, N + 1):
            if trusted[i] == N - 1:
                return i
        return -1


# TESTS
tests = [
    {"N": 1, "trust": [], "expected": 1},
    {"N": 2, "trust": [[1, 2]], "expected": 2},
    {"N": 3, "trust": [[1, 3], [2, 3]], "expected": 3},
    {"N": 3, "trust": [[1, 3], [2, 3], [3, 1]], "expected": -1},
    {"N": 3, "trust": [[1, 2], [2, 3]], "expected": -1},
    {"N": 4, "trust": [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]], "expected": 3},
]
for t in tests:
    sol = Solution()
    actual = sol.findJudge(t["N"], t["trust"])
    print("The town judge of N =", t["N"], "->", actual)
    assert actual == t["expected"]
