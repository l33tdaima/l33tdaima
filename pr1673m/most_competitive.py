from typing import List


class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
        stack = []
        for i, n in enumerate(nums):
            while stack and stack[-1] > n and len(stack) - 1 + len(nums) - i >= k:
                # If we pop stack, we have len(stack) - 1 left, there are len(nums) - i can be pushed
                # if this value >= k, we can proceed the pop operation.
                stack.pop()
            if len(stack) < k:
                stack.append(n)
        return stack


# TESTS
for nums, k, expected in [
    ([3, 5, 2, 6], 2, [2, 6]),
    ([2, 4, 3, 3, 5, 4, 9, 6], 4, [2, 3, 3, 4]),
]:
    sol = Solution()
    actual = sol.mostCompetitive(nums, k)
    print("Most competitive subsequence of k =", k, "in", nums, "->", actual)
    assert actual == expected
