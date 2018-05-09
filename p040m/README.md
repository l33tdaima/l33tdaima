# 40. Combination Sum II (Medium)

Given a collection of candidate numbers (C) (with duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

### Example 1:
```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```
### Example 2:
```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```

## Solution
Backtracking problem with two challenges, (a) candidate can't be reused and (b) duplicates are not allowed.
- Sort the candidates
- Create a recursive backtracking helper function working on a subarray and reduced target
  - target < 0: return
  - target = 0: add to output
  - target > 0: for each element in candidates, add to workingArray not including itself, recursion, remove it. Also making sure skipping the duplicate per requirement.

#SNAP

#Backtracking

#Similar question [#039m](../p039m/README.md) [#040m](../p040m/README.md) [#216m](../p216m/README.md) [#377m](../p377m/README.md)
