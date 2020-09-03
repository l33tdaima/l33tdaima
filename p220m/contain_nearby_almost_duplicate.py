from typing import List


class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        if t < 0:
            return False
        buckets = {}
        for i, num in enumerate(nums):
            key = nums[i] // (t + 1)
            if key in buckets:
                return True
            if key - 1 in buckets and num - buckets[key - 1] <= t:
                return True
            if key + 1 in buckets and buckets[key + 1] - num <= t:
                return True
            buckets[key] = num
            if i >= k:
                del buckets[nums[i - k] // (t + 1)]
        return False


# TESTS
tests = [
    ([1, 2, 3, 1], 3, 0, True),
    ([1, 0, 1, 1], 1, 2, True),
    ([1, 5, 9, 1, 5, 9], 2, 3, False),
    ([1, 5, 9, 1, 5, 9], 2, 4, True),
]
for nums, k, t, expected in tests:
    sol = Solution()
    actual = sol.containsNearbyAlmostDuplicate(nums, k, t)
    print(
        f"{nums} contains duplicates within {k} steps value at most {t} ->", actual,
    )
    assert actual == expected
