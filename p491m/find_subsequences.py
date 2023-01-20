class Solution:
    def findSubsequences(self, nums: list[int]) -> list[list[int]]:
        subs = {()}
        for n in nums:
            subs |= {sub + (n,) for sub in subs if not sub or sub[-1] <= n}
        return [list(sub) for sub in subs if len(sub) >= 2]


# TESTS
for nums, expected in [
    (
        [4, 6, 7, 7],
        [
            [4, 6],
            [4, 6, 7],
            [4, 6, 7, 7],
            [4, 7],
            [4, 7, 7],
            [6, 7],
            [6, 7, 7],
            [7, 7],
        ],
    ),
    ([4, 4, 3, 2, 1], [[4, 4]]),
]:
    sol = Solution()
    actual = sol.findSubsequences(nums)
    print(
        "All the different possible non-decreasing subsequences in",
        nums,
        "->",
        sorted(actual),
    )
    assert sorted(actual) == sorted(expected)
