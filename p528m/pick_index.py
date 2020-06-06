from typing import List
from itertools import accumulate
import random


class SolutionV1:
    def __init__(self, w: List[int]):
        self.index = []
        for i, v in enumerate(w):
            self.index += [i] * v

    def pickIndex(self) -> int:
        return self.index[random.randint(0, len(self.index) - 1)]


class SolutionV2:
    def __init__(self, w: List[int]):
        self.psum = list(accumulate(w))

    def pickIndex(self) -> int:
        rand = random.randint(1, self.psum[-1])
        l, r = 0, len(self.psum) - 1
        while l < r:
            m = (l + r) // 2
            if self.psum[m] == rand:
                return m
            if self.psum[m] < rand:
                l = m + 1
            else:
                r = m
        return l


# Your Solution object will be instantiated and called as such:
# obj = Solution(w)
# param_1 = obj.pickIndex()
tests = [
    ([1], 1),
    ([1, 3], 5),
    ([1, 3, 5], 10),
    ([3, 14, 1, 7], 10),
    ([1, 2, 2, 2, 2, 2, 2, 10, 20], 20),
]
for t in tests:
    sol = SolutionV2(t[0])
    actual = [sol.pickIndex() for _ in range(t[1])]
    print("Pick index from", t[0], "->", actual)
