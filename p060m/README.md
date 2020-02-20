# 60. Permutation Sequence (Medium)

The set `[1,2,3,...,n]` contains a total of `n!` unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

1. "123"
2. "132"
3. "213"
4. "231"
5. "312"
6. "321"

Given n and k, return the kth permutation sequence.

### Note:
- Given n will be between 1 and 9 inclusive.
- Given k will be between 1 and n! inclusive.

### Example 1:
```
Input: n = 3, k = 3
Output: "213"
```

### Example 2:
```
Input: n = 4, k = 9
Output: "2314"
```

## Solution
### Backtracking
Backtracking will be a brutal force solution which search `n!` solution space, works but will cause TLE

### Math
Notice that we have total `n!` different sequence, and if we draw the searh tree, on the first level there are n choices, on the second level there are `n - 1` choices in each branch, until 1 choice in the last level. Based the total number of each branch on each level, we can find the path by counting without doing literal backtracking.

#Math #Backtracking
