from heapq import heappush, heappop


class Solution:
    def getOrder(self, tasks: list[list[int]]) -> list[int]:
        todo = sorted([(t[0], t[1], i) for i, t in enumerate(tasks)])[::-1]
        t, enqueued, ans = 0, [], []
        while todo or enqueued:
            if todo and t >= todo[-1][0]:
                _, ptime, i = todo.pop()
                heappush(enqueued, (ptime, i))
            elif not enqueued:
                # move t to the enqueue time after exiting idle
                t, ptime, i = todo.pop()
                heappush(enqueued, (ptime, i))
            else:
                ptime, i = heappop(enqueued)
                ans.append(i)
                t += ptime
        return ans


# TESTS
for tasks, expected in [
    ([[1, 2], [2, 4], [3, 2], [4, 1]], [0, 2, 3, 1]),
    ([[7, 10], [7, 12], [7, 5], [7, 4], [7, 2]], [4, 3, 2, 0, 1]),
    ([[7, 10], [7, 12], [7, 5], [7, 4], [7, 2], [100, 1]], [4, 3, 2, 0, 1, 5]),
]:
    sol = Solution()
    actual = sol.getOrder(tasks)
    print("CPU will process tasks in order", actual)
    assert actual == expected
