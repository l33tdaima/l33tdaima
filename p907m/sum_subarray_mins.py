class Solution:
    def sumSubarrayMins(self, arr: list[int]) -> int:
        arr = [0] + arr
        result, stack = [0] * len(arr), [0]
        for i, v in enumerate(arr):
            while arr[stack[-1]] > v:
                stack.pop()
            j = stack[-1]
            result[i] = result[j] + (i - j) * v
            stack.append(i)
        return sum(result) % (10 ** 9 + 7)


# TESTS
for arr, expected in [
    ([3, 1, 2, 5, 4], 30),
    ([3, 1, 2, 4], 17),
    ([11, 81, 94, 43, 3], 444),
]:
    sol = Solution()
    actual = sol.sumSubarrayMins(arr)
    print("Sum of Subarray Minimums of", arr, "->", actual)
    assert actual == expected
