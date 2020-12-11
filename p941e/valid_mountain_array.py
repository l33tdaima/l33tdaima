from typing import List


class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 3 or arr[0] > arr[1]:
            return False
        peak = False
        for i in range(1, len(arr)):
            if arr[i - 1] == arr[i]:
                return False
            if peak and arr[i - 1] < arr[i]:
                return False
            peak = arr[i - 1] > arr[i]
        return peak


# TESTS
for arr, expected in [
    ([1], False),
    ([2, 1], False),
    ([3, 5, 5], False),
    ([0, 3, 2, 1], True),
    ([3, 4, 5, 7], False),
    ([4, 3, 2, 1], False),
    ([0, 2, 3, 4, 5, 2, 1, 0], True),
    ([0, 2, 3, 3, 5, 2, 1, 0], False),
    ([0, 2, 3, 1, 5, 2, 1, 0], False),
]:
    sol = Solution()
    actual = sol.validMountainArray(arr)
    print("Is", arr, "valid mountain array? ->", actual)
    assert actual == expected
