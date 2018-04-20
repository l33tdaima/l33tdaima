# 311. Sparse Matrix Multiplication (Medium)

Given two sparse matrices A and B, return the result of AB.

You may assume that A's column number is equal to B's row number.

Example:
```
A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]


     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |
```

## Solution
Note that `ColumnA == RowB`.

### Intuitive Approach
Scan AB dimension, which is `RowA * ColB`, then each result cell value `AB[i][j]` is the sum of i-th row of A and j-th column of B.

### Better Approach
A fastest way to avoid rescanning A's rows is use A's dimension in the main double loop, for the non-zero cell of A, compute its contribution to AB. The inner loop is on ColumnB.

#FB #LNKD

#Array
