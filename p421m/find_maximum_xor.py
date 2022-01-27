class Solution:
    def findMaximumXOR(self, nums: list[int]) -> int:
        ans, mask = 0, 0
        for i in range(32)[::-1]:
            mask = mask | (1 << i)
            prefix_set = {n & mask for n in nums}
            exp = ans | (1 << i)
            if any(x ^ exp in prefix_set for x in prefix_set):
                ans = exp
        return ans


# TESTS
for nums, expected in [
    ([3, 10, 5, 25, 2, 8], 28),
    ([0], 0),
    ([2, 4], 6),
    ([8, 10, 2], 10),
    ([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70], 127),
]:
    sol = Solution()
    actual = sol.findMaximumXOR(nums)
    print("The maximum XOR of two numbers in", nums, "->", actual)
    assert actual == expected
