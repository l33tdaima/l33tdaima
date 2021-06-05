from typing import List
from collections import deque


class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        def neighbors(node: str) -> str:
            for i in range(4):
                yield f"{node[:i]}{(int(node[i]) + 1) % 10}{node[i + 1:]}"
                yield f"{node[:i]}{(int(node[i]) - 1) % 10}{node[i + 1:]}"

        visited, queue, turns = set(deadends), deque(["0000"]), -1
        while queue:
            size = len(queue)
            turns += 1
            for _ in range(size):
                node = queue.popleft()
                if node == target:
                    return turns
                if node in visited:
                    continue
                visited.add(node)
                queue.extend(neighbors(node))
        return -1


# TESTS
for deadends, target, expected in [
    (["0201", "0101", "0102", "1212", "2002"], "0202", 6),
    (["8888"], "0009", 1),
    (["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], "8888", -1),
    (["0000"], "8888", -1),
]:
    sol = Solution()
    actual = sol.openLock(deadends, target)
    print("The minimum turns required to open the lock", target, "->", actual)
    assert actual == expected
