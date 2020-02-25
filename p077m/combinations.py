from typing import List


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        ans = []

        def backtrack(path, start):
            if len(path) == k:
                # append a copy not the current volatile reference
                ans.append(list(path))
                return
            for i in range(start, n + 1):
                path.append(i)
                backtrack(path, i + 1)
                path.pop()

        backtrack([], 1)
        return ans


tests = [
    (1, 1),
    (2, 1),
    (2, 2),
    (3, 1),
    (3, 2),
    (3, 3),
    (4, 1),
    (4, 2),
    (4, 3),
    (4, 4),
    (5, 2),
]
for t in tests:
    sol = Solution()
    print("Combination (", t[0], ",", t[1], ") ->", sol.combine(t[0], t[1]))
