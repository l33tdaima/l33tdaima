from typing import List
from collections import defaultdict


class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        edge_count, max_count = defaultdict(int), 0
        for row in wall:
            s = 0
            for brick in row[0:-1]:
                s += brick
                edge_count[s] += 1
                max_count = max(max_count, edge_count[s])
        return len(wall) - max_count


# TESTS
for wall, expected in [
    ([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]], 2),
    ([[3], [3], [3]], 3),
]:
    sol = Solution()
    actual = sol.leastBricks(wall)
    print("The least of crossed bricks in", wall, "->", actual)
    assert actual == expected
