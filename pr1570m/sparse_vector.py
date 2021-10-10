from typing import List


class SparseVector:
    def __init__(self, nums: List[int]):
        self.nz_dict = {i: n for i, n in enumerate(nums) if n != 0}
        self.nz_idx = set(self.nz_dict.keys())

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec: "SparseVector") -> int:
        isec = self.nz_idx & vec.nz_idx
        return sum(self.nz_dict[i] * vec.nz_dict[i] for i in isec)


# TESTS
for nums1, nums2, expected in [
    ([1, 0, 0, 2, 3], [0, 3, 0, 4, 0], 8),
    ([0, 1, 0, 0, 0], [0, 0, 0, 0, 2], 0),
    ([0, 1, 0, 0, 2, 0, 0], [1, 0, 0, 0, 3, 0, 4], 6),
]:
    vec1, vec2 = SparseVector(nums1), SparseVector(nums2)
    actual = vec1.dotProduct(vec2)
    print(f"{nums1} .* {nums2} = {actual}")
    assert actual == expected
