from typing import List


class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ngemap, stack = dict(), []
        for n2 in nums2:
            while stack and stack[-1] < n2:
                ngemap[stack.pop()] = n2
            stack.append(n2)
        return [ngemap.get(n1, -1) for n1 in nums1]


# TESTS
for nums1, nums2, expected in [
    ([4, 1, 2], [1, 3, 4, 2], [-1, 3, -1]),
    ([2, 4], [1, 2, 3, 4], [3, -1]),
]:
    sol = Solution()
    actual = sol.nextGreaterElement(nums1, nums2)
    print("Next greater elements of", nums1, "in", nums2, "->", actual)
    assert actual == expected
