# 305. Number of Islands II (Hard)
A 2d grid map of m rows and n columns is initially filled with water. We may perform an addLand operation which turns the water at position (row, col) into a land. Given a list of positions to operate, count the number of islands after each addLand operation. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Example:

Given m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]].
Initially, the 2d grid grid is filled with water. (Assume 0 represents water and 1 represents land).
```
0 0 0
0 0 0
0 0 0
```
Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.

```
1 0 0
0 0 0   Number of islands = 1
0 0 0
```
Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.

```
1 1 0
0 0 0   Number of islands = 1
0 0 0
```
Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.

```
1 1 0
0 0 1   Number of islands = 2
0 0 0
```
Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.

```
1 1 0
0 0 1   Number of islands = 3
0 1 0
```
We return the result as an array: [1, 1, 2, 3]

Challenge:

Can you do it in time complexity O(k log mn), where k is the length of the positions?

## Solution
Linearize the 2D grid points grid[i][j] into a 1D array by letting k = i * n + j, then apply union-find algorithm.
For each added land in positions list,
1. Temporarily increment the count;
2. Check if this land connected to any of four neighbor lands (quick find x 4):
   - decrement count if not connected before; no-op if no;
   - union (quick union) this land with neighbor;
3. Append the count to the result.

Leverage the weighted quick union with path compression https://www.cs.princeton.edu/~rs/AlgsDS07/01UnionFind.pdf

#GOOGL

#Union Find

#Similar questions [#200m](../p200m/README.md) [#305h](../p305h/README.md)
