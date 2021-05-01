from typing import List
from math import pow


class Solution:
    def powerfulIntegersV0(self, x: int, y: int, bound: int) -> List[int]:
        ans, i = set(), 0
        while x ** i < bound:
            j = 0
            while (s := x ** i + y ** j) <= bound:
                ans.add(s)
                if y == 1:
                    break
                j += 1
            if x == 1:
                break
            i += 1
        return list(ans)

    def powerfulIntegersV1(self, x: int, y: int, bound: int) -> List[int]:
        ans, i = set(), 1
        while i < bound:
            j = 1
            while i + j <= bound:
                ans.add(i + j)
                if y == 1:
                    break
                j *= y
            if x == 1:
                break
            i *= x
        return list(ans)

    def powerfulIntegersV2(self, x: int, y: int, bound: int) -> List[int]:
        xs = {x ** i for i in range(20) if x ** i < bound}
        ys = {y ** j for j in range(20) if y ** j < bound}
        return list({i + j for i in xs for j in ys if i + j <= bound})


# TESTS
for x, y, bound, expected in [
    (2, 3, 10, [2, 3, 4, 5, 7, 9, 10]),
    (3, 5, 15, [2, 4, 6, 8, 10, 14]),
    (2, 1, 10, [2, 3, 5, 9]),
]:
    sol = Solution()
    actual = sorted(sol.powerfulIntegersV0(x, y, bound))
    print(f"Powerful integers({x}, {y}, {bound}) -> {actual}")
    assert actual == expected
    assert expected == sorted(sol.powerfulIntegersV1(x, y, bound))
    assert expected == sorted(sol.powerfulIntegersV2(x, y, bound))
