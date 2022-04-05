class Solution:
    def maxArea(self, height: list[int]) -> int:
        l, r, ans = 0, len(height) - 1, 0
        while l < r:
            ans = max(ans, (r - l) * min(height[l], height[r]))
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return ans


# TESTS
for height, expected in [
    ([1, 8, 6, 2, 5, 4, 8, 3, 7], 49),
    ([1, 1], 1),
    ([4, 3, 2, 1, 4], 16),
    ([1, 2, 1], 2),
]:
    sol = Solution()
    actual = sol.maxArea(height)
    print("The most water in", height, "->", actual)
    assert actual == expected
