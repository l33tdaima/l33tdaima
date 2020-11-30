from typing import List


class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        visited = [False] * len(arr)

        def helper(i: int):
            if 0 <= i < len(arr) and not visited[i]:
                visited[i] = True
                return arr[i] == 0 or helper(i + arr[i]) or helper(i - arr[i])
            return False

        return helper(start)


# TESTS
for arr, start, expected in [
    ([4, 2, 3, 0, 3, 1, 2], 5, True),
    ([4, 2, 3, 0, 3, 1, 2], 0, True),
    ([3, 0, 2, 1, 2], 2, False),
]:
    sol = Solution()
    actual = sol.canReach(arr, start)
    print("Can reach 0 starting from", start, "in", arr, "->", actual)
    assert actual == expected
