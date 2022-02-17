# 39. Combination Sum (Medium)

Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all unique combinations of candidates where the chosen numbers sum to `target`. You may return the combinations in any order.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

### Example 1:

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

### Example 2:

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

### Example 3:

```
Input: candidates = [2], target = 1
Output: []
```

### Example 4:

```
Input: candidates = [1], target = 1
Output: [[1]]
```

### Example 5:

```
Input: candidates = [1], target = 2
Output: [[1,1]]
```

### Constraints:

- `1 <= candidates.length <= 30`
- `1 <= candidates[i] <= 200`
- All elements of `candidates` are _distinct_.
- `1 <= target <= 500`

## Solution

Classical backtracking problem.

- Sort the candidates
- Create a recursive backtracking helper function working on a subarray and reduced target
  - target < 0: return
  - target = 0: add to output
  - target > 0: for each element in candidates, add to workingArray including itself, recursion, remove it

#UBER #SNAP

#Array #Backtracking

#Similar question [#039m](../p039m/README.md) [#040m](../p040m/README.md) [#216m](../p216m/README.md) [#377m](../p377m/README.md)
