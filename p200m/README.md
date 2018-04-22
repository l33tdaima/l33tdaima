# 200. Number of Islands (Medium)

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Example 1:
```
11110
11010
11000
00000
```
Answer: 1

### Example 2:
```
11000
11000
00100
00011
```
Answer: 3

## Solution
Between two islands, we can never reach each other's land by DFS,
- Scan the grid
  - For each land, do DFS on four directions, and mark visited
  - Within this DFS, increment the count
- Return the count

#FB #GOOGL

#Depth-first Search #Union Find

#Similar questions [#200m](../p200m/README.md) [#305h](../p305h/README.md)
