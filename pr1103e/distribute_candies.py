from typing import List


class Solution:
    # Time complexity O(sqrt(candies))
    def distributeCandiesV1(self, candies: int, num_people: int) -> List[int]:
        i, ans = 0, [0] * num_people
        while candies > 0:
            ans[i % num_people] += min(candies, i + 1)
            candies -= i + 1
            i += 1
        return ans

    # Time complexity O(num_people)
    def distributeCandiesV2(self, candies: int, num_people: int) -> List[int]:
        m, row_sum, n2 = 0, num_people * (num_people + 1) // 2, num_people * num_people
        while candies > row_sum + m * n2:
            candies -= row_sum + m * n2
            m += 1
        ans = [(i + 1) * m + num_people * (m - 1) * m // 2 for i in range(num_people)]
        i = 0
        while candies > 0:
            share = m * num_people + i + 1
            ans[i] += min(share, candies)
            candies -= share
            i += 1
        return ans


# TESTS
tests = [
    (1, 5, [1, 0, 0, 0, 0]),
    (4, 5, [1, 2, 1, 0, 0]),
    (7, 4, [1, 2, 3, 1]),
    (10, 3, [5, 2, 3]),
    (7, 2, [4, 3]),
    (8, 1, [8]),
    (10001, 4, [2546, 2450, 2485, 2520]),
]
for t in tests:
    sol = Solution()
    actual = sol.distributeCandiesV2(t[0], t[1])
    print("Distribute", t[0], "candies to", t[1], "people ->", actual)
    assert actual == t[2]
    assert t[2] == sol.distributeCandiesV1(t[0], t[1])
