from typing import List


class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        lo, hi = 1, len(nums) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            lt, eq = 0, 0
            for n in nums:
                if n == mid:
                    eq += 1
                elif lo <= n < mid:
                    lt += 1
            # print(lo, hi, mid, lt, eq)
            if eq > 1:
                return mid
            if lt <= mid - lo:
                lo = mid + 1
            else:
                hi = mid - 1
        return lo

    def findDuplicateON(self, nums: List[int]) -> int:
        # Find the intersection point of the two runners.
        tortoise = hare = nums[0]
        while True:
            tortoise = nums[tortoise]
            hare = nums[nums[hare]]
            if tortoise == hare:
                break

        # Find the "entrance" to the cycle.
        tortoise = nums[0]
        while tortoise != hare:
            tortoise = nums[tortoise]
            hare = nums[hare]

        return hare


# TESTS
tests = [
    ([1, 1], 1),
    ([1, 2, 1], 1),
    ([1, 1, 1], 1),
    ([1, 3, 4, 2, 2], 2),
    ([3, 1, 3, 4, 2], 3),
    ([3, 1, 3, 3, 2], 3),
    ([1, 3, 4, 2, 1], 1),
    ([7, 9, 7, 4, 2, 8, 7, 7, 1, 5], 7),
    ([3, 1, 4, 5, 2, 6, 9, 8, 7, 9], 9),
]
for t in tests:
    sol = Solution()
    actual = sol.findDuplicate(t[0])
    print("Find duplicate in", t[0], "->", actual)
    assert actual == t[1]
    assert sol.findDuplicateON(t[0]) == t[1]
