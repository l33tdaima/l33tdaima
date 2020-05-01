from typing import List
from collections import Counter


class Solution:
    def countElements(self, arr: List[int]) -> int:
        counter = Counter(arr)
        return sum(counter[x] for x in counter if x + 1 in counter)


# TESTS
tests = [
    ([1, 2, 3], 2),
    ([1, 1, 3, 3, 5, 5, 7, 7], 0),
    ([1, 3, 2, 3, 5, 0], 3),
    ([1, 1, 2, 2], 2),
    ([1, 1, 2], 2),
    ([1, 2, 2], 1),
]
for t in tests:
    sol = Solution()
    actual = sol.countElements(t[0])
    print("Counting elements in", t[0], "->", actual)
    assert actual == t[1]
