from typing import List


class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        ranges = []
        for n in nums:
            if ranges and n == ranges[-1][1] + 1:
                ranges[-1][1] = n
            else:
                ranges.append([n, n])
        return [f"{l}->{r}" if l != r else str(l) for l, r in ranges]


# TESTS
for nums, expected in [
    ([0, 1, 2, 4, 5, 7], ["0->2", "4->5", "7"]),
    ([0, 2, 3, 4, 6, 8, 9], ["0", "2->4", "6", "8->9"]),
    ([], []),
    ([-1], ["-1"]),
    ([0], ["0"]),
]:
    sol = Solution()
    actual = sol.summaryRanges(nums)
    print("Summary ranges of", nums, "->", actual)
    assert actual == expected
