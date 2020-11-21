from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        lo, hi = 0, len(nums) - 1
        while lo <= hi:
            mid = lo + (hi - lo) // 2
            if target == nums[mid]:
                return True
            # tricky part to filter the duplicates
            if nums[lo] == nums[mid] == nums[hi]:
                lo, hi = lo + 1, hi - 1
            elif nums[lo] <= nums[mid]:  # left is absolutely sorted
                if nums[lo] <= target < nums[mid]:
                    hi = mid - 1
                else:
                    lo = mid + 1
            else:
                if nums[mid] < target <= nums[hi]:
                    lo = mid + 1
                else:
                    hi = mid - 1
        return False


# TESTS
for nums, target, expected in [
    [[0, 5, 6, 0, 0, 0], 5, True],
    [[0, 5, 6, 0, 0, 0], 6, True],
    [[2, 5, 6, 0, 0, 1, 2], 0, True],
    [[2, 5, 6, 0, 0, 1, 2], 3, False],
    [[0, 5, 6, 0, 0, 0, 0], 6, True],
    [[0, 0, 0, 0, 0, 0, 0], 5, False],
]:
    sol = Solution()
    actual = sol.search(nums, target)
    print("Search", nums, "for target", target, "->", actual)
    assert actual == expected
