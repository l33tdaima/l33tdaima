from typing import List


class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        ans = [len(heights) - 1]
        for i in range(len(heights) - 2, -1, -1):
            if heights[i] > heights[ans[-1]]:
                ans.append(i)
        return ans[::-1]


# TESTS
for heights, expected in [
    ([4, 2, 3, 1], [0, 2, 3]),
    ([4, 3, 2, 1], [0, 1, 2, 3]),
    ([1, 3, 2, 4], [3]),
    ([2, 2, 2, 2], [3]),
]:
    sol = Solution()
    actual = sol.findBuildings(heights)
    print("Indices of ocean views in", heights, "->", actual)
    assert actual == expected
