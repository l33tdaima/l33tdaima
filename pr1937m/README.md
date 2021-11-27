# 1937. Maximum Number of Points with Cost (Medium)

You are given an `m x n` integer matrix `points` (_0-indexed_). Starting with `0` points, you want to _maximize_ the number of points you can get from the matrix.

To gain points, you must pick one cell in each row. Picking the cell at coordinates `(r, c)` will add `points[r][c]` to your score.

However, you will lose points if you pick a cell too far from the cell that you picked in the previous row. For every two adjacent rows `r` and `r + 1` (where `0 <= r < m - 1`), picking cells at coordinates `(r, c1)` and `(r + 1, c2)` will _subtract_ `abs(c1 - c2)` from your score.

Return the _maximum_ number of points you can achieve.

`abs(x)` is defined as:

- x for x >= 0.
- -x for x < 0.

### Example 1:

```
Input: points = [[1,2,3],[1,5,1],[3,1,1]]
Output: 9
Explanation:
The blue cells denote the optimal cells to pick, which have coordinates (0, 2), (1, 1), and (2, 0).
You add 3 + 5 + 3 = 11 to your score.
However, you must subtract abs(2 - 1) + abs(1 - 0) = 2 from your score.
Your final score is 11 - 2 = 9.
```

### Example 2:

```
Input: points = [[1,5],[2,3],[4,2]]
Output: 11
Explanation:
The blue cells denote the optimal cells to pick, which have coordinates (0, 1), (1, 1), and (2, 0).
You add 5 + 3 + 4 = 12 to your score.
However, you must subtract abs(1 - 1) + abs(1 - 0) = 1 from your score.
Your final score is 12 - 1 = 11.
```

### Constraints:

- `m == points.length`
- `n == points[r].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `0 <= points[r][c] <= 10^5`

## Solution

Use a DP state `pre[i]` to denote the max score of each cell `i` can be achieved at previous row of `points[m]`, to derive the current state `cur`, we need to scan the whole row,

```python
cur[i] = max(pre[j] - abs(j - i) for j in range(n)) + row[i]
```

which requires `O(N^2)` for one row and `O(N^3)` for the whole grid.

To improve to `O(N)` for one row, we need two helper arrays, `left[i]` and `right[i]`,

```python
left[i] = max(pre[i], left[i-1] - 1)
right[i] = max(pre[i], right[i + 1] - 1)
cur[i] = max(left[i], right[i]) + row[i]
```

#Array #Dynamic Programming
