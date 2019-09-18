from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        i, i1, i2 = m + n - 1, m - 1, n - 1
        while i1 >= 0 or i2 >= 0:
            if i1 < 0:
                nums1[i], i2 = nums2[i2], i2 - 1
            elif i2 < 0:
                nums1[i], i1 = nums1[i1], i1 - 1
            elif nums1[i1] < nums2[i2]:
                nums1[i], i2 = nums2[i2], i2 - 1
            else:
                nums1[i], i1 = nums1[i1], i1 - 1
            i -= 1


# TESTS
tests = [
    {"nums1": [], "m": 0, "nums2": [], "n": 0, "expected": []},
    {"nums1": [2, 0], "m": 1, "nums2": [1], "n": 1, "expected": [1, 2]},
    {
        "nums1": [1, 3, 5, 0, 0, 0],
        "m": 3,
        "nums2": [2, 4, 6],
        "n": 3,
        "expected": [1, 2, 3, 4, 5, 6],
    },
    {
        "nums1": [4, 5, 6, 0, 0, 0],
        "m": 3,
        "nums2": [2, 2, 2],
        "n": 3,
        "expected": [2, 2, 2, 4, 5, 6],
    },
]
for t in tests:
    sol = Solution()
    print("Merge", t["nums1"], "with", t["nums2"])
    sol.merge(t["nums1"], t["m"], t["nums2"], t["n"])
    print("  ->", t["nums1"])
    assert t["nums1"] == t["expected"]
