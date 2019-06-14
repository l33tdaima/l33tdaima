from typing import List

class Solution:
    def containsDuplicateV1(self, nums: List[int]) -> bool:
        seen = set()
        for n in nums:
            if n in seen:
                return True
            seen.add(n)
        return False

    def containsDuplicateV2(self, nums: List[int]) -> bool:
        return len(set(nums)) < len(nums)
# TESTS
tests = [
    ([1,2,3,1], True),
    ([1,2,3,4], False),
    ([1,1,1,3,3,4,3,2,4,2], True)
]
for t in tests:
    sol = Solution()
    actual = sol.containsDuplicateV1(t[0])
    print("Array of", t[0], "contains duplicates ->", actual)
    assert(actual == t[1])
    assert(actual == sol.containsDuplicateV2(t[0]))