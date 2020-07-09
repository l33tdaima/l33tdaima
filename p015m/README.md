# 15. 3Sum (Medium)

Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

### Note:
The solution set must not contain duplicate triplets.

### Example
```
Given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## Solution
- Sort the array
- For each fixed element, `[0, len-2)`
  - Iterate from both end at the same time in inner loop
  - `lo++, hi--` if matches target
  - `lo++` if less than target
  - `hi--` if greater than target

#FB #MSFT #AMZN #GOOGL #BBG #ADBE

#Array #Two Pointers

#Similar questions [#015m](../p015m/README.md) [#259m](../p259m/README.md)

#Explore Facebook
