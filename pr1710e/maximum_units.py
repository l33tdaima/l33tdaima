from typing import List


class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        ans = 0
        for boxes, units in sorted(boxTypes, key=lambda v: v[1], reverse=True):
            if truckSize > 0:
                ans += min(truckSize, boxes) * units
                truckSize -= boxes
            else:
                break
        return ans


# TESTS
for boxTypes, truckSize, expected in [
    ([[1, 3], [2, 2], [3, 1]], 4, 8),
    ([[5, 10], [2, 5], [4, 7], [3, 9]], 10, 91),
]:
    sol = Solution()
    actual = sol.maximumUnits(boxTypes, truckSize)
    print(
        "The maximum total number of units of boxes",
        boxTypes,
        "can loaded in truckSize",
        truckSize,
        "->",
        actual,
    )
    assert actual == expected
