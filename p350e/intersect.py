from typing import List
from collections import Counter


class Solution:
    def intersect_hashtable(
        self, nums1: List[int], nums2: List[int]
    ) -> List[int]:
        ans = []
        counter1 = Counter(nums1)
        for n2 in nums2:
            if counter1[n2] > 0:
                ans.append(n2)
                counter1[n2] -= 1
        return ans

    def intersect_sort(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2.sort()
        i1, i2 = 0, 0
        ans = []
        while i1 < len(nums1) and i2 < len(nums2):
            if nums1[i1] == nums2[i2]:
                ans.append(nums1[i1])
                i1, i2 = i1 + 1, i2 + 1
            elif nums1[i1] < nums2[i2]:
                i1 += 1
            else:
                i2 += 1
        return ans


# TESTS
tests = [
    ([1, 2, 2, 1], [2, 2], [2, 2]),
    ([1, 2, 2, 1], [2, 2, 2, 3], [2, 2]),
    ([4, 9, 5], [9, 4, 9, 8, 4], [4, 9]),
]
for t in tests:
    sol = Solution()
    actual_ht = sol.intersect_hashtable(t[0], t[1])
    actual_sort = sol.intersect_sort(t[0], t[1])
    print("Interset", t[0], t[1], "->", actual_ht)
    assert actual_ht.sort() == t[2].sort()
    assert actual_sort.sort() == t[2].sort()
