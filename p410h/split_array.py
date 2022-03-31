from cmath import exp
from curses.ascii import SO


class Solution:
    def splitArray(self, nums: list[int], m: int) -> int:
        def valid(upperbound: int, m: int) -> bool:
            curr_sum, count = 0, 1
            for n in nums:
                curr_sum += n
                if curr_sum > upperbound:
                    curr_sum, count = n, count + 1
                    if count > m:
                        return False
            return True

        l, r = max(nums), sum(nums)
        while l < r:
            mid = (l + r) // 2
            if valid(mid, m):
                r = mid
            else:
                l = mid + 1
        return l


for nums, m, expected in [
    ([7, 2, 5, 10, 8], 2, 18),
    ([1, 2, 3, 4, 5], 2, 9),
    ([1, 4, 4], 3, 4),
]:
    sol = Solution()
    actual = sol.splitArray(nums, m)
    print("Minimized largest sum among", m, "subarrays in", nums, "->", actual)
    assert actual == expected
