120. Triangle (Medium)

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
```

### Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

## Solution
Instead of top to bottom, we can also calculate bottom up, the total path sum are the same.

The DP state `state[j]` is the minimal path sum up to element j on that row, the state array is updated row by row so that we only need O(n) extra space.
`state_i+1[j] = min(state_i[j], state_i[j+1]) + triangle[i][j]`

#Array #Dynamic Programming
