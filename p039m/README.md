# 39. Combination Sum (Medium)

Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]

## Solution
Classical backtracking problem.
- Sort the candidates
- Create a recursive backtracking helper function working on a subarray and reduced target
  - target < 0: return
  - target = 0: add to output
  - target > 0: for each element in candidates, add to workingArray including itself, recursion, remove it

#UBER #SNAP

#Array #Backtracking

#Similar question [#040m](../p040m/README.md) [#216m](../p216m/README.md) [#377m](../p377m/README.md)
