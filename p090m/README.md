# 90. Subset II (Medium)

Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set).

The solution set _must not_ contain duplicate subsets. Return the solution in _any order_.

### Example 1:

```
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
```

### Example 2:

```
Input: nums = [0]
Output: [[],[0]]
```

### Constraints:

- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10

## Solution

- Sort first
- Backtracking with skipping duplicate elements.

#FB

#Array #Backtracking

#Similar questions [#078m](../p078m/README.md) [#090m](../p090m/README.md)
