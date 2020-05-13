from typing import List


class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        ans = []
        for p in sorted(people, key=lambda hk: (-hk[0], hk[1])):
            ans.insert(p[1], p)
        return ans


# TESTS
tests = [
    [],
    [[7, 0]],
    [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2],],
]
for t in tests:
    sol = Solution()
    print("After reconstructing queue ->", sol.reconstructQueue(t))
