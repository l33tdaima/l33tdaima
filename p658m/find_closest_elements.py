from typing import List


class Solution:
    def findClosestElementsV1(self, arr: List[int], k: int, x: int) -> List[int]:
        l, r = 0, len(arr) - 1
        while r - l >= k:
            if x - arr[l] > arr[r] - x:
                l += 1
            else:
                r -= 1
        return arr[l : r + 1]

    def findClosestElementsV2(self, arr: List[int], k: int, x: int) -> List[int]:
        l, r = 0, len(arr) - k
        while l < r:
            m = (l + r) // 2
            if x - arr[m] > arr[m + k] - x:
                l = m + 1
            else:
                r = m
        return arr[l : l + k]


# TESTS
for arr, k, x, expected in [
    ([1, 2, 3, 4, 5], 4, 3, [1, 2, 3, 4]),
    ([1, 2, 4, 5], 2, 3, [2, 4]),
    ([1, 2, 3, 4, 5], 4, -1, [1, 2, 3, 4]),
    ([1, 2, 3, 4, 5], 3, 6, [3, 4, 5]),
]:
    sol = Solution()
    actual = sol.findClosestElementsV1(arr, k, x)
    print(f"{k} Closest Elements to {x} in {arr} -> {actual}")
    assert actual == expected
    assert sol.findClosestElementsV2(arr, k, x) == expected
