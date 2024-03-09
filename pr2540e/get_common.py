class Solution:
    def getCommon(self, nums1: list[int], nums2: list[int]) -> int:
        i, j = 0, 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] < nums2[j]:
                i += 1
            elif nums1[i] > nums2[j]:
                j += 1
            else:
                return nums1[i]
        return -1


# TESTS
for nums1, nums2, expected in [
    ([1, 2, 3], [2, 4], 2),
    ([1, 2, 3, 6], [2, 3, 4, 5], 2),
    ([1, 2, 3, 6], [12, 13, 14, 15], -1),
]:
    sol = Solution()
    actual = sol.getCommon(nums1, nums2)
    print("The minimum integer common to", nums1, "and", nums2, "->", actual)
    assert actual == expected
