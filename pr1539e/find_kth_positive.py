from typing import List


class Solution:
    def findKthPositiveV1(self, arr: List[int], k: int) -> int:
        counter = 1  # keep track of the number expected in each position
        for a in arr:
            if k <= a - counter:
                return counter + k - 1
            k -= a - counter
            counter = a + 1
        return counter + k - 1

    def findKthPositiveV2(self, arr: List[int], k: int) -> int:
        l, r = 0, len(arr)
        while l < r:
            m = (l + r) // 2
            # arr[m] - (m+1) indicates the expected missing should have up to this position
            if arr[m] - (m + 1) < k:
                l = m + 1
            else:
                r = m
        return l + k


# TESTS
for arr, k, expected in [
    ([10, 11], 1, 1),
    ([10, 11], 3, 3),
    ([3], 2, 2),
    ([2, 3, 4, 7, 11], 5, 9),
    ([1, 2, 3, 4], 2, 6),
]:
    sol = Solution()
    actual = sol.findKthPositiveV1(arr, k)
    print(f"Find {k}th missing positive in {arr} -> {actual}")
    assert actual == expected
    assert expected == sol.findKthPositiveV2(arr, k)
