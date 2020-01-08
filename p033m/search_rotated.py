from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        lo, hi = 0, len(nums) - 1
        while lo <= hi:
            mid = lo + (hi - lo) // 2
            if nums[mid] == target:
                return mid
            if nums[lo] <= nums[mid]:  # left is sorted
                if nums[lo] <= target and target < nums[mid]:
                    hi = mid - 1
                else:
                    lo = mid + 1
            else:  # right is sorted
                if nums[mid] < target and target <= nums[hi]:
                    lo = mid + 1
                else:
                    hi = mid - 1
        return -1


# TESTS
tests = [
    [[3, 1], 1, 1],
    [[4, 5, 6, 7, 0, 1, 2], 0, 4],
    [[4, 5, 6, 7, 0, 1, 2], 3, -1],
    [[5, 6, 0, 1, 2, 3, 4], 5, 0],
    [[5, 6, 0, 1, 2, 3, 4], 4, 6],
    [[4, 5, 6, 7, 0, 1, 2, 3], 3, 7],
    [[3, 4, 5, 6, 7, 0, 1, 2], 0, 5],
]
for t in tests:
    sol = Solution()
    actual = sol.search(t[0], t[1])
    print("Search", t[0], "for target", t[1], "->", actual)
    assert actual == t[2]
