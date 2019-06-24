from typing import List

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        num_idx_dict = {}
        for i in range(len(nums)):
            if nums[i] in num_idx_dict and i - num_idx_dict[nums[i]] <= k:
                return True
            else:
                num_idx_dict[nums[i]] = i
        return False
# TESTS
tests = [
    ([1,2,3,1], 3, True),
    ([1,0,1,1], 1, True),
    ([1,2,3,1,2,3], 2, False)
]
for t in tests:
    sol = Solution()
    actual = sol.containsNearbyDuplicate(t[0], t[1])
    print(t[0], "contains duplicates away from each other at most", t[1], "->", actual)
    assert(actual == t[2])
