from typing import List
from collections import Counter


class Solution:
    def intersectV1(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ans = []
        counter1 = Counter(nums1)
        for n2 in nums2:
            if counter1[n2] > 0:
                ans.append(n2)
                counter1[n2] -= 1
        return ans

    def intersectV2(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list((Counter(nums1) & Counter(nums2)).elements())

    def intersectV3(self, nums1: List[int], nums2: List[int]) -> List[int]:
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
for nums1, nums2, expected in [
    ([1, 2, 2, 1], [2, 2], [2, 2]),
    ([1, 2, 2, 1], [2, 2, 2, 3], [2, 2]),
    ([4, 9, 5], [9, 4, 9, 8, 4], [4, 9]),
]:
    sol = Solution()
    actual1 = sol.intersectV1(nums1, nums2)
    actual2 = sol.intersectV2(nums1, nums2)
    actual3 = sol.intersectV3(nums1, nums2)
    print("Interset", nums1, nums2, "->", actual1)
    assert actual1.sort() == actual2.sort() == actual3.sort() == expected.sort()
