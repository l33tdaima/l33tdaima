from typing import List


class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        ans = []

        def backtrack(path: List[int], k: int, rem: int, start: int) -> None:
            if k == 0:
                if rem == 0:
                    ans.append(path)
                return

            for num in range(start, 10):
                backtrack(path + [num], k - 1, rem - num, num + 1)

        backtrack([], k, n, 1)
        return ans


# TESTS
tests = [
    (3, 7, [[1, 2, 4]]),
    (3, 9, [[1, 2, 6], [1, 3, 5], [2, 3, 4]]),
]
for k, n, expected in tests:
    sol = Solution()
    actual = sol.combinationSum3(k, n)
    print("Combination sum k =", k, ", n =", n, "->", actual)
    assert actual == expected
