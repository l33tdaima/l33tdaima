class Solution:
    def combinationSum3(self, k: int, n: int) -> list[list[int]]:
        ans = []

        def backtrack(path: list[int], k: int, rem: int, start: int) -> None:
            if k == 0:
                if rem == 0:
                    ans.append(path)
                return

            for num in range(start, 10):
                backtrack(path + [num], k - 1, rem - num, num + 1)

        backtrack([], k, n, 1)
        return ans


# TESTS
for k, n, expected in [
    (3, 7, [[1, 2, 4]]),
    (3, 9, [[1, 2, 6], [1, 3, 5], [2, 3, 4]]),
    (4, 1, []),
]:
    sol = Solution()
    actual = sol.combinationSum3(k, n)
    print("Combination sum k =", k, ", n =", n, "->", actual)
    assert actual == expected
