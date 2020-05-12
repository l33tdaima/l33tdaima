from typing import List


class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            m = (l + r) // 2
            if nums[m - 1] != nums[m] != nums[m + 1]:
                return nums[m]
            elif nums[m - 1] == nums[m]:
                if (r - m) % 2 == 0:  # even number on m's rhs
                    r = m - 2
                else:
                    l = m + 1
            else:  # nums[m] == nums[r]
                if (m - l) % 2 == 0:  # even number on m's left
                    l = m + 2
                else:
                    r = m - 1
        return nums[l]


# TESTS
tests = [
    ([1, 1, 2], 2),
    ([1, 2, 2, 3, 3], 1),
    ([2, 2, 3, 5, 5], 3),
    ([2, 2, 3, 3, 5], 5),
    ([1, 1, 2, 3, 3, 4, 4, 8, 8], 2),
    ([3, 3, 7, 7, 10, 11, 11], 10),
]
for t in tests:
    sol = Solution()
    actual = sol.singleNonDuplicate(t[0])
    print("The single non-duplicate in", t[0], "->", actual)
    assert actual == t[1]
