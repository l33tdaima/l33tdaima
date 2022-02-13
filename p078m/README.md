# 78. Subsets (Medium)

Given an integer array `nums` of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

### Example 1:

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

### Example 2:

```
Input: nums = [0]
Output: [[],[0]]
```

### Constraints:

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- All the numbers of `nums` are unique.

## Solution

- Classical backtracking problem.
- Bit manipulation, translating the bit representation of index of 2^n result set into the list consists of num[j] show or no show to avoid deep stack of too many recursive calls.

#FB #AMZN #BBG #UBER #Coupang

#Array #Backtracking #Bit Manipulation

#Similar questions [#078m](../p078m/README.md) [#090m](../p090m/README.md)

#Explore Facebook
