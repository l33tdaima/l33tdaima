from typing import List


class Solution:
    def createSortedArray(self, instructions: List[int]) -> int:
        m = max(instructions)
        c = [0] * (m + 1)

        def get(x: int) -> int:
            res = 0
            while x > 0:
                res += c[x]
                x -= x & -x
            return res

        def update(x: int) -> None:
            while x <= m:
                c[x] += 1
                x += x & -x

        ans = 0
        for i, v in enumerate(instructions):
            ans += min(get(v - 1), i - get(v))
            update(v)
        return ans % (10 ** 9 + 7)


# TESTS
for instructions, expected in [
    ([1, 5, 6, 2], 1),
    ([1, 2, 3, 6, 5, 4], 3),
    ([1, 3, 3, 3, 2, 4, 2, 1, 2], 4),
]:
    sol = Solution()
    actual = sol.createSortedArray(instructions)
    print("Cost of creating sorted array from", instructions, "->", actual)
    assert actual == expected
