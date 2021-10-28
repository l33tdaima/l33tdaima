# 15. 3Sum (Medium)

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Example 1:

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

### Example 2:

```
Input: nums = []
Output: []
```

### Example 3:

```
Input: nums = [0]
Output: []
```

### Constraints:

- `0 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

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
