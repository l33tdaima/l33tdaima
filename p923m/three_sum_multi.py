from typing import List
from collections import Counter


class Solution:
    def threeSumMultiSlow(self, arr: List[int], target: int) -> int:
        ans, memo = 0, dict()
        for i, n in enumerate(arr):
            ans += memo.get(target - n, 0) 
            for j in range(0, i):
                s = arr[i] + arr[j]
                memo[s] = memo.get(s, 0) + 1
        return ans % (10 ** 9 + 7)

    def threeSumMultiFast(self, arr: List[int], target: int) -> int:
        """ O(N + 101 * 101) """
        ans, c = 0, Counter(arr)
        for i in c:
            for j in c:
                k = target - i - j
                if k not in c:
                    continue
                if i == j == k:
                    ans += c[i] * (c[i] - 1) * (c[i] - 2) // 6
                elif i == j and i != k:
                    ans += c[i] * (c[i] - 1) // 2 * c[k]
                elif i < j and j < k:
                    ans += c[i] * c[j] * c[k]
        return ans % (10 ** 9 + 7)


# TESTS
for arr, target, expected in [
    ([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8, 20),
    ([1, 1, 2, 2, 2, 2], 5, 12),
]:
    sol = Solution()
    actual = sol.threeSumMultiFast(arr, target)
    print("# of tuples in", arr, "makes 3 sum of", target, "->", actual)
    assert actual == expected
    assert expected == sol.threeSumMultiSlow(arr, target)
