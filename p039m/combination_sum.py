class Solution:
    def combinationSum(
        self, candidates: list[int], target: int
    ) -> list[list[int]]:
        candidates.sort()
        ans = []

        def helper(path: list[int], target: int, start: int) -> None:
            if target < 0:
                return
            if target == 0:
                ans.append(list(path))
                return
            for i in range(start, len(candidates)):
                path.append(candidates[i])
                helper(path, target - candidates[i], i)
                path.pop()

        helper([], target, 0)
        return ans


# TESTS
for candidates, target, expected in [
    ([2, 3, 6, 7], 7, [[2, 2, 3], [7]]),
    ([2, 3, 5], 8, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]),
    ([2], 1, []),
    ([1], 1, [[1]]),
    ([1], 2, [[1, 1]]),
]:
    sol = Solution()
    actual = sol.combinationSum(candidates, target)
    print("Combinations in", candidates, "sum to", target, "->", actual)
    assert actual == expected
