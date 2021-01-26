from typing import List


class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        prev = -k - 1
        for i, n in enumerate(nums):
            if n == 1:
                if i - prev <= k:
                    return False
                prev = i
        return True


# TESTS
for nums, k, expected in [
    ([1, 0, 0, 0, 1, 0, 0, 1], 2, True),
    ([1, 0, 0, 1, 0, 1], 2, False),
    ([1, 1, 1, 1, 1], 0, True),
    ([0, 1, 0, 1], 1, True),
]:
    sol = Solution()
    actual = sol.kLengthApart(nums, k)
    print(f"All 1's are at least {k} places away in {nums} ->", actual)
    assert actual == expected

