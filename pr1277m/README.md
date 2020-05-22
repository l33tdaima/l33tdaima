# 1277. Count Square Submatrices with All Ones (Medium)

Given a `m * n` matrix of ones and zeros, return how many square submatrices have all ones.

### Example 1:
```
Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
```

### Example 2:
```
Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.
```

### Constraints:
- 1 <= arr.length <= 300
- 1 <= arr[0].length <= 300
- 0 <= arr[i][j] <= 1

## Solution
Let `dp[i][j]` be the side length of the maximum square whose bottom right corner is `matrix[i][j]`.
`dp[i+1][j+1]` also means the number of squares with `matrix[i][j]` as bottom right corner.

`dp[i][j] = min(dp[i-1][j],dp[i][j-1],dp[i][j]) + 1  when matrix[i][j] == 1 and not on the edge`

The answer is the sum of dp matrix.

#Dynamic Programming

#Similar questions [#221m](../p221m/README.md) [#1277m](../pr1277m/README.md)
