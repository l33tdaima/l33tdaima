from typing import List


class Solution:
    # DFS Approach: Time complexity of O(10 * 2^N) if N <= 4 and O(N) if N >= 5
    def numsSameConsecDiffV1(self, N: int, K: int) -> List[int]:
        ans = list()

        def helper(wip: str) -> None:
            nonlocal N, K
            if len(wip) == N:
                ans.append(int(wip))
                return
            d = int(wip[-1])
            if d >= K:
                helper(wip + str(d - K))
            if K != 0 and d + K <= 9:
                helper(wip + str(d + K))

        if N == 1:
            return [i for i in range(10)]
        for i in range(1, 10):
            helper(str(i))
        return ans

    # BFS Approach: Time complexity of O(10 * 2^N) if N <= 4 and O(N) if N >= 5
    def numsSameConsecDiffV2(self, N: int, K: int) -> List[int]:
        cur = range(10)
        for i in range(N - 1):
            cur = {x * 10 + y for x in cur for y in [x % 10 + K, x % 10 - K] if x and 0 <= y <= 9}
        return list(cur)


# TESTS
tests = [
    (1, 9, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    (3, 7, [181, 292, 707, 818, 929]),
    (2, 1, [10, 12, 21, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98]),
    (2, 0, [11, 22, 33, 44, 55, 66, 77, 88, 99]),
]
for t in tests:
    sol = Solution()
    actual = sol.numsSameConsecDiffV1(t[0], t[1])
    print("Numbers with same consecutive differences N =", t[0], ", K =", t[1], "->", actual)
    assert actual == t[2]
    assert t[2] == sorted(sol.numsSameConsecDiffV2(t[0], t[1]))

