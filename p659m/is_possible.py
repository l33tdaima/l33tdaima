from collections import Counter


class Solution:
    def isPossible(self, nums: list[int]) -> bool:
        leftover, end = Counter(nums), Counter()
        for i in nums:
            if leftover[i] == 0:
                continue
            leftover[i] -= 1
            if end[i - 1] > 0:
                end[i - 1] -= 1
                end[i] += 1
            elif leftover[i + 1] and leftover[i + 2]:
                leftover[i + 1] -= 1
                leftover[i + 2] -= 1
                end[i + 2] += 1
            else:
                return False
        return True


for nums, expected in [
    ([1, 2, 3, 3, 4, 5], True),
    ([1, 2, 3, 3, 4, 4, 5, 5], True),
    ([1, 2, 3, 4, 4, 5], False),
]:
    sol = Solution()
    actual = sol.isPossible(nums)
    assert actual == expected
