# 163. Missing Ranges (Medium)

Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

### Example:
```
Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
```

## Solution
Clarify that all the numbers are within range.

Use a `next` variable to record a moving start point, keep pushing the segment `(next, nums[i] - 1)`. Also take care of the last segment.

#GOOGL

#Array

#Similar questions [#163m](../p163m/README.md) [#228m](../p228m/README.md)