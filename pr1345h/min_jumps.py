from collections import defaultdict, deque


class Solution:
    def minJumps(self, arr: list[int]) -> int:
        id_of_val = defaultdict(list)
        for i, v in enumerate(arr):
            id_of_val[v].append(i)

        queue = deque([(0, 0)])
        visited_id, visited_val = set(), set()
        while queue:
            i, step = queue.popleft()
            if i == len(arr) - 1:
                return step
            visited_id.add(i)
            v = arr[i]
            for j in [i - 1, i + 1] + id_of_val[v] * (v not in visited_val):
                if 0 <= j < len(arr) and j not in visited_id:
                    queue.append((j, step + 1))
            visited_val.add(v)
        return 0


# TESTS
for arr, expected in [
    ([100, -23, -23, 404, 100, 23, 23, 23, 3, 404], 3),
    ([7], 0),
    ([7, 6, 9, 6, 9, 6, 9, 7], 1),
    ([6, 1, 9], 2),
    ([11, 22, 7, 7, 7, 7, 7, 7, 7, 22, 13], 3),
]:
    sol = Solution()
    actual = sol.minJumps(arr)
    print("The minimum steps to reach the last in", arr, "->", actual)
    assert actual == expected
