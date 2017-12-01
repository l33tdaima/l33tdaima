# 463. Island Perimeter (Easy)

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16

## Solution
DFS will work but this can be calculated by adding 4 for any island, and remove 2 if there is neighbor island, but when search neighbor island, should only search either up/left or down/right, otherwise will double count.

#Array #Math
#GOOGL
