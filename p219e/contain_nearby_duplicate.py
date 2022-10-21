class Solution:
    def containsNearbyDuplicate(self, nums: list[int], k: int) -> bool:
        seen_at = {}
        for i, n in enumerate(nums):
            if n in seen_at and i - seen_at[n] <= k:
                return True
            else:
                seen_at[n] = i
        return False


# TESTS
for nums, k, expected in [
    ([1, 2, 3, 1], 3, True),
    ([1, 0, 1, 1], 1, True),
    ([1, 2, 3, 1, 2, 3], 2, False),
]:
    sol = Solution()
    actual = sol.containsNearbyDuplicate(nums, k)
    print(
        nums,
        "contains duplicates away from each other at most",
        k,
        "->",
        actual,
    )
    assert actual == expected
