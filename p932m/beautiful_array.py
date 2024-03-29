from typing import List


class Solution:
    def beautifulArray(self, n: int) -> List[int]:
        res = [1]
        while len(res) < n:
            res = [i * 2 - 1 for i in res] + [i * 2 for i in res]
        return [i for i in res if i <= n]


# TESTS
for n in range(10):
    sol = Solution()
    actual = sol.beautifulArray(n)
    print("Beautiful array of", n, "->", actual)
