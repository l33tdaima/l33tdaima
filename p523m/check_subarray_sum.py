from itertools import accumulate


class Solution:
    def checkSubarraySum(self, nums: list[int], k: int) -> bool:
        psum_mod = [n % k for n in accumulate(nums)]
        seen = {0: -1}
        for i, n in enumerate(psum_mod):
            if n in seen:
                if i - seen[n] >= 2:
                    return True
            else:
                seen[n] = i
        return False


# TESTS
for nums, k, expected in [
    ([0, 0], 1, True),
    ([23, 2, 4, 6, 7], 6, True),
    ([23, 2, 6, 4, 7], 6, True),
    ([23, 2, 6, 4, 7], 13, False),
    ([1], 2, False),
]:
    sol = Solution()
    actual = sol.checkSubarraySum(nums, k)
    print(
        nums,
        "has subarray of size at least two sum up to multiple of",
        k,
        "->",
        actual,
    )
    assert actual == expected
