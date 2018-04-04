# 286. Walls and Gates (Medium)

You are given a m x n 2D grid initialized with these three possible values.

- -1 - A wall or an obstacle.
- 0 - A gate.
- INF - Infinity means an empty room. We use the value 2^32 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

For example, given the 2D grid:
```
INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF
```
After running your function, the 2D grid should be:
```
  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4
```

## Solution
### Clarification
- Gates must be on the perimeter?

### Algorithm
Scan the matrix for the gate (0), starting from each gate, 
- Fill its neighbors with 1 increment,
- For each room/cell, overwrite the number if we have lesser when traverse from another gate, keep it unchanged if we have greater.

Note that when traverse the matrix, due to the deep recursion, BFS has much better performance than DFS

#FB #GOOGL

#Breadth-first Search
