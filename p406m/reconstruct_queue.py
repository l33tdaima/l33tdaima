from typing import List


class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        ans = []
        for p in sorted(people, key=lambda hk: (-hk[0], hk[1])):
            ans.insert(p[1], p)
        return ans


# TESTS
for people, expected in [
    ([], []),
    ([[7, 0]], [[7, 0]]),
    (
        [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]],
        [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]],
    ),
    (
        [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]],
        [[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]],
    ),
]:
    sol = Solution()
    actual = sol.reconstructQueue(people)
    print("After reconstructing queue ->", actual)
    assert actual == expected
