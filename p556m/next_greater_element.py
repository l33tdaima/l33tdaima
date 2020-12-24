from functools import reduce


class Solution:
    def nextGreaterElement(self, n: int) -> int:
        nums = [int(d) for d in str(n)]
        # find the rightmost digit smaller than the next “534976” -> 9
        i = len(nums) - 1
        while i > 1:
            if nums[i - 1] < nums[i]:
                break
            i -= 1
        if i == 0 or (i == 1 and nums[0] >= nums[1]):
            return -1
        # search for the smallest digit on the right part “534976” -> 6
        min_i = i
        for j in range(i, len(nums)):
            if nums[j] > nums[i - 1] and nums[j] < nums[min_i]:
                min_i = j
        # swap 4 and 6
        nums[i - 1], nums[min_i] = nums[min_i], nums[i - 1]
        # sort the right part “534976” -> “536974”
        next_nums = nums[:i] + sorted(nums[i:])
        ans = reduce(lambda x, y: x * 10 + y, next_nums, 0)
        return ans if ans <= (2 ** 31 - 1) else -1


# TESTS
for n, expected in [
    (1, -1),
    (12, 21),
    (21, -1),
    (1234, 1243),
    (54321, -1),
    (111, -1),
    (230241, 230412),
    (534976, 536479),
    (1999999999, -1),
]:
    sol = Solution()
    actual = sol.nextGreaterElement(n)
    print("Next smallest integer of", n, "->", actual)
    assert actual == expected
