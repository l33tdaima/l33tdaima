from typing import List
from random import random
import math


class Solution:
    def __init__(self, radius: float, x_center: float, y_center: float):
        self.rad = radius
        self.x, self.y = x_center, y_center

    def randPoint(self) -> List[float]:
        rad = self.rad * math.sqrt(random())
        theta = 2 * math.pi * random()
        return [
            self.x + rad * math.cos(theta),
            self.y + rad * math.sin(theta),
        ]


# Your Solution object will be instantiated and called as such:
# obj = Solution(radius, x_center, y_center)
# param_1 = obj.randPoint()
for radius, x_center, y_center, n in [
    (1, 0, 0, 3),
    (5, 1, 1, 5),
    (7, -1, 0, 7),
    (10, 5, -7.5, 10),
]:
    sol = Solution(radius, x_center, y_center)
    print(
        f"Random points in circle ({radius}, {x_center}, {y_center}) ->",
        [sol.randPoint() for _ in range(n)],
    )

