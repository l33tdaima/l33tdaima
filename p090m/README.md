# 90. Subset II (Medium)

Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

### Example:
```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```
## Solution
- Sort first
- Backtracking with skipping duplicate elements.

#FB

#Array #Backtracking

#Similar questions [#078m](../p078m/README.md) [#090m](../p090m/README.md)