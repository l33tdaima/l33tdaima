# 78. Subsets (Medium)

Given a set of *distinct* integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

### Example:
```
Input: nums = [1,2,3]
Output::
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

## Solution
- Classical backtracking problem.
- Bit manipulation, translating the bit representation of index of 2^n result set into the list consists of num[j] show or no show to avoid deep stack of too many recursive calls.

#FB #AMZN #BBG #UBER #Coupang

#Array #Backtracking #Bit Manipulation

#Similar questions [#078m](../p078m/README.md) [#090m](../p090m/README.md)

#Explore Facebook
