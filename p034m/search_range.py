from typing import List


class Solution:
    def binarySearch(self, nums: List[int], target: int, starting: bool) -> int:
        l, r = 0, len(nums) - 1
        while l <= r:
            mid = l + (r - l) // 2
            if nums[mid] < target:
                l = mid + 1
            elif nums[mid] > target:
                r = mid - 1
            else:  # find target
                if starting:  # search for starting position
                    if mid == 0 or nums[mid - 1] != target:
                        return mid
                    else:
                        r = mid - 1
                else:  # search for ending position
                    if mid == len(nums) - 1 or nums[mid + 1] != target:
                        return mid
                    else:
                        l = mid + 1
        return -1

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        starting = self.binarySearch(nums, target, True)
        if starting == -1:
            return [-1, -1]
        return [starting, self.binarySearch(nums, target, False)]


# TESTS
tests = [
    ([5, 7, 7, 8, 8, 10], 8, [3, 4]),
    ([5, 7, 7, 8, 8, 10], 6, [-1, -1]),
    ([5, 7, 7, 8, 8, 10, 10, 10], 5, [0, 0]),
    ([5, 7, 7, 8, 8, 10, 10, 10], 10, [5, 7]),
]

for t in tests:
    sol = Solution()
    actual = sol.searchRange(t[0], t[1])
    print("Search", t[1], "in", t[0], "->", actual)
    assert actual == t[2]
