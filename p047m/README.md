# 47. Permutations II (Medium)

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

### Example:
```
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

## Solution
- Sort the input so that we can identify the duplicates
- We only need to modify the solution of no-duplicate case a little
- When we detect a duplicate, we skip either 
  - `!visited[i - 1]` pick the first
  - `visited[i - 1]` pick the last
  - `!visited[i - 1]` is more efficient after drawing the recursive tree.

#Backtracking

#Similar questions [#046m](../p046m/README.md) [#047m](../p047m/README.md)

#Explore Facebook
