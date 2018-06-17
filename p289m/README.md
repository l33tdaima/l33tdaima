# 289. Game of Life (Medium)

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.

### Example
```
Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
```

Follow up: 
- Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
- In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

## Solution
To solve it in-place, we will need to store the new and old state of each cell by bits, let LSB be the old and the bit to the left to be the new state, i.e.
01 - live -> dead, live neighbors < 2 or > 3
11 - live -> live, live neighbors >= 2 and <=3
10 - dead -> live, live neighbors == 3
00 - dead -> dead, live neighbors != 3

1. Compute the encoded next state one by one, extract the current state by v & 1.
2. Loop again and decode each cell by v >> 1.

In order to represent infinite board, we will only store the coordinates of live cells in a set, the set will be refreshed each generation.

### Follow up
Infinite board can be represented by live coordinate set of type `unordered_set<Coordinate>`.
- Iterate each live coordinate in the set, calculate the neighbors count object `unordered_map<Coordinate, Count>` it will contribute.
- Iterator each live count element in the map above, generate the new live set under the evolution rules.
  - count == 3 regardless original state is live or dead
  - count == 2, original live set contains this coordinate
- return the new live set.

#GOOGL #SNAP #DBX #TwoSigma

#Array #Bit Manipulation
