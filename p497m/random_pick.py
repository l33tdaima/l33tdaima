from typing import List
from random import choices, randint
from bisect import bisect_left


class SolutionV1:
    def __init__(self, rects: List[List[int]]):
        self.rects = rects
        self.weights = [(x2 - x1 + 1) * (y2 - y1 + 1) for x1, y1, x2, y2 in rects]

    def pick(self) -> List[int]:
        x1, y1, x2, y2 = choices(
            self.rects, weights=self.weights, cum_weights=None, k=1
        )[0]
        return [randint(x1, x2), randint(y1, y2)]


class SolutionV2:
    def __init__(self, rects: List[List[int]]):
        self.rects, self.cum_area, s = rects, [], 0
        for x1, y1, x2, y2 in rects:
            s += (x2 - x1 + 1) * (y2 - y1 + 1)
            self.cum_area.append(s)

    def pick(self) -> List[int]:
        x1, y1, x2, y2 = self.rects[
            bisect_left(self.cum_area, randint(1, self.cum_area[-1]))
        ]
        return [randint(x1, x2), randint(y1, y2)]


# Your Solution object will be instantiated and called as such:
# obj = Solution(rects)
# param_1 = obj.pick()
tests = [
    ([[1, 1, 5, 5]], 3),
    ([[-2, -2, -1, -1], [1, 0, 3, 0]], 5),
]
for t in tests:
    sol = SolutionV2(t[0])
    print("Random picks from", t[0], "->", [sol.pick() for i in range(t[1])])
