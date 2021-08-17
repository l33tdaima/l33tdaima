from typing import List
from itertools import accumulate


class NumArray:
    def __init__(self, nums: List[int]):
        self.psums = [0] + list(accumulate(nums))

    def sumRange(self, left: int, right: int) -> int:
        return self.psums[right + 1] - self.psums[left]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
for nums, left, right, expected in [
    ([1, 2, 3, 4, 5], 1, 2, 5),
    ([1, 2, 3, 4, 5], 0, 0, 1),
    ([-2, 0, 3, -5, 2, -1], 0, 2, 1),
    ([-2, 0, 3, -5, 2, -1], 2, 5, -1),
    ([-2, 0, 3, -5, 2, -1], 0, 5, -3),
]:
    na = NumArray(nums)
    actual = na.sumRange(left, right)
    print("sumRange(", left, ",", right, ") ->", actual)
    assert actual == expected
