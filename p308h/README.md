# 308. Range Sum Query 2D - Mutable (Hard)

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

The above rectangle (with the red border) is defined zero based by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

### Example:
```
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
update(3, 2, 2)
sumRegion(2, 1, 4, 3) -> 10
```
### Note:
- The matrix is only modifiable by the update function.
- You may assume the number of calls to update and sumRegion function is distributed evenly.
- You may assume that row1 ≤ row2 and col1 ≤ col2.

## Solution
2D binary indexed tree for partial sum storage. Note that binary indexed tree works on 1-based index instead of 0-based.

In 1-based space,
```
sumRegion = query(row2 + 1, col2 + 1) - query(row2 + 1, col1) - query(row1, col2 + 1) + query(row1, col1)
```

#GOOGL
#GOOGL.MJ

#Binary Indexed Tree #Segment Tree