class Solution:
    def findDifference(
        self, nums1: list[int], nums2: list[int]
    ) -> list[list[int]]:
        set1, set2 = set(nums1), set(nums2)
        return [
            [n for n in set1 if n not in set2],
            [n for n in set2 if n not in set1],
        ]


# TESTS
for nums1, nums2, expected in [
    ([1, 2, 3], [2, 4, 6], [[1, 3], [4, 6]]),
    ([1, 2, 3, 3], [1, 1, 2, 2], [[3], []]),
]:
    sol = Solution()
    actual = sol.findDifference(nums1, nums2)
    assert actual == expected
