from typing import List


class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = {0}

        def dfs(i: int) -> None:
            for k in rooms[i]:
                if k not in visited:
                    visited.add(k)
                    dfs(k)

        dfs(0)
        return len(visited) == len(rooms)


# TESTS
for rooms, expected in [
    ([[1], [2], [3], []], True),
    ([[1, 3], [3, 0, 1], [2], [0]], False),
]:
    sol = Solution()
    actual = sol.canVisitAllRooms(rooms)
    print("You can enter every room in", rooms, "->", actual)
    assert actual == expected
