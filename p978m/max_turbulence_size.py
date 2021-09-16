from typing import List


class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        ans, tsize, exp = 1, 1, 0
        # exp is the expected direction, 1: increase, -1: decrease, 0: don't care
        for i in range(1, len(arr)):
            if arr[i] > arr[i - 1]:
                tsize = tsize + 1 if exp >= 0 else 2  # expect an increase
                exp = -1
            elif arr[i] < arr[i - 1]:
                tsize = tsize + 1 if exp <= 0 else 2  # expect a decrease
                exp = 1
            else:  # flat
                tsize, exp = 1, 0
            ans = max(ans, tsize)
        return ans


# TESTS
for arr, expected in [
    ([9, 4, 2, 10, 7, 8, 8, 1, 9], 5),
    ([4, 8, 12, 16], 2),
    ([100], 1),
    ([10, 10, 10], 1),
]:
    sol = Solution()
    actual = sol.maxTurbulenceSize(arr)
    print("The maximum size of turbulent subarray in", arr, "->", actual)
    assert actual == expected
