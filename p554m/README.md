# 554. Brick Wall (Medium)

There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the top to the bottom and cross the least bricks.

The brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right.

If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks.

**You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.**

### Example:
Input:
```
[[1,2,2,1],
 [3,1,2],
 [1,3,2],
 [2,4],
 [3,1,2],
 [1,3,1,1]]
```
Output: 2

Explanation: 
![Pic](brick_wall.png)

### Note:
The width sum of bricks in different rows are the same and won't exceed INT_MAX.
The number of bricks in each row is in range [1,10,000]. The height of wall is in range [1,10,000]. Total number of bricks of the wall won't exceed 20,000.

## Solution
### Intuitive Approach
Scan each potential cut which is 1 unit increment, and compute the size of each cut, seeking the minimum.
- Maintain the position array to store where we are in each row. 
- When we move the cut forward by 1 step, we need substract the wall[i][pos[i]] by 1, if zero it means we are at the edge of previous brick, no count. O(M * Width).
- A small improvment is to move minWidth each step instead of 1 unit.

### Optimal Approach
A O(N) optimal approach can be achieved by exchanging a hash table for speed. Observed that minimal brick crossing must be reached at a particular edge of a particular row, and the total edges over all the rows must be maximum. Hence the algorithm,
- The hash table is key by the position of possible cut, starting from 0 as left wall edge, value is count of edges at this position.
- Scan the bricks row by row:
    - If this edge is already in hash table, increment the count, otherwise set 1.
    - Keep track the max count
- Return `(walls.length - maxCount)` as number of crossed bricks.

For the given example,
| Row # | Hash Table Changes | max = 0 |
| ----- | ------------------ | ------- |
| Row 0 | (1,1) (3,1) (5,1)  | max = 1 |
| Row 1 | (3,2) (4,1)        | max = 2 |
| Row 2 | (1,2) (4,2)        | max = 2 |
| Row 3 | (2,1)              | max = 2 |
| Row 4 | (3,3) (4,3)        | max = 3 |
| Row 5 | (1,3) (4,4) (5,2)  | max = 4 |
Return `6 - 4 = 2`


#FB

#Hash Table
