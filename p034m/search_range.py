from typing import List


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def binarySearch(l: int, r: int, first: bool) -> int:
            nonlocal target
            while l <= r:
                mid = l + (r - l) // 2
                if nums[mid] < target:
                    l = mid + 1
                elif nums[mid] > target:
                    r = mid - 1
                else:  # == target
                    if first:  # search for the first position
                        if mid == 0 or nums[mid - 1] != target:
                            return mid
                        else:
                            r = mid - 1
                    else:  # search for the last position
                        if mid == len(nums) - 1 or nums[mid + 1] != target:
                            return mid
                        else:
                            l = mid + 1
            return -1

        first = binarySearch(0, len(nums) - 1, True)
        if first == -1:
            return [-1, -1]
        return [first, binarySearch(first, len(nums) - 1, False)]


# TESTS
for nums, target, expected in [
    ([5, 7, 7, 8, 8, 10], 8, [3, 4]),
    ([5, 7, 7, 8, 8, 10], 6, [-1, -1]),
    ([], 0, [-1, -1]),
    ([5, 7, 7, 8, 8, 10, 10, 10], 5, [0, 0]),
    ([5, 7, 7, 8, 8, 10, 10, 10], 10, [5, 7]),
]:
    sol = Solution()
    actual = sol.searchRange(nums, target)
    print("Search", target, "in", nums, "->", actual)
    assert actual == expected
