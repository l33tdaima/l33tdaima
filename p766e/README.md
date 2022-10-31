# 766. Toeplitz Matrix (Easy)

Given an `m x n` matrix, return `true` if the matrix is **Toeplitz**. Otherwise, return `false`.

A matrix is **Toeplitz** if every diagonal from top-left to bottom-right has the same elements.

### Example 1:

```
Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
```

### Example 2:

```
Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.
```

### Constraints:

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 20`
- `0 <= matrix[i][j] <= 99`

### Follow up:

- What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
- What if the matrix is so large that you can only load up a partial row into the memory at once?

## Solution

- Check top right triangle:
  - Scan the first row from `row = 0, col = 0 .. C-1`, using this cell as start then check downward by [i++, j++]
- Check bottom left triangle:
  - Scan the last row from `row = R-1, col = 0 .. C-1`, using this cell as start then check upward by [i--, j--]

Actually, this can be generalized by scan the matrix without the last row and last col and make sure its `[i+1][j+1]` neighbor has the same value.

#GOOGL

#Similar questions [#422e](../p422e/README.md) [#425h](../p425h/README.md) [#766e](../p766e/README.md)
