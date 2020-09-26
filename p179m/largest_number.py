from typing import List
from functools import cmp_to_key


class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        class Key(str):
            def __lt__(self, other):
                return self + other > other + self

        numstr = sorted(map(str, nums), key=Key)
        ans = "".join(numstr).lstrip("0")
        return ans if ans else "0"


# TESTS
tests = [
    ([0, 0], "0"),
    ([10, 2], "210"),
    ([824, 8247], "8248247"),
    ([3, 30, 34, 31, 9], "93433130"),
    ([3, 30, 34, 5, 9], "9534330"),
]
for nums, expected in tests:
    sol = Solution()
    actual = sol.largestNumber(nums)
    print("Largest number formed by", nums, "->", actual)
    assert actual == expected
