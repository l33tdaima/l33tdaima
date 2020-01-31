from typing import List


class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # return list(set(nums1) & set(nums2))
        set1 = set(nums1)
        set2 = set([n for n in nums2 if n in set1])
        return list(set2)


# TESTS
tests = [
    [[], []],
    [[1], [2]],
    [[1, 2, 2], [3]],
    [[1, 2, 2, 1], [2, 2]],
    [[4, 9, 5], [9, 4, 9, 8, 4]],
]
for t in tests:
    sol = Solution()
    print(
        "Intersection of", t[0], "and", t[1], "->", sol.intersection(t[0], t[1])
    )

