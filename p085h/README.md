# 85. Maximal Rectangle (Hard)

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

### Example:
```
Input:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
```
## Solution
Imagine the matrix is a histogram row by row, each column is a pillar with height represented by the count of continuous '1's, or reset to 0 as long as the bottom one is '0'. Increase submatrix row by row, for each submatrix solve the [#084h](../p084h/README.md) largest rectangle area problem by stack, and update the global max area. The DP here is the pillar heights 1D array.
```
  1 0 1 0 0
  1 0 1 1 1
  1 1 1 1 1
  1 0 0 1 0
Row 0:
  1 0 1 0 0 -> max = 1, gmax = 1
Row 1:
  1 0 1 0 0
  1 0 1 1 1 -> max = 3, gmax = 3
Row 2:
  1 0 1 0 0
  1 0 1 1 1
  1 1 1 1 1 -> max = 6, gmax  = 6
Row 3:
  1 0 1 0 0
  1 0 1 1 1
  1 1 1 1 1
  1 0 0 1 0 -> max = 4, gmax = 6
```
#FB

#Array #Dynamic Programming #Stack

#Similar questions [#084h](../p084h/README.md) [#085h](../p085h/README.md) [#221m](../p221m/README.md)