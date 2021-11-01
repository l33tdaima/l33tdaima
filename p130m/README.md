# 130. Surrounded Regions (Medium)

Given an `m x n` matrix board containing `'X'` and `'O'`, capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.

### Example:

```
X X X X      X X X X
X O O X  =>  X X X X
X X O X      X X X X
X O X X      X O X X

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
```

### Example 2:

```
Input: board = [["X"]]
Output: [["X"]]
```

### Constraints:

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` is `'X'` or `'O'`.

## Solution

- First, check the four border of the matrix. If there is a element is 'O', alter it and all its neighbor 'O' elements to '1'.
- Then, alter all the 'O' to 'X'
- At last, alter all the '1' to 'O'

#Depth-first Search #Breadth-first Search #Union-Find

### Similar questions

[#130](../p130m/README.md) [#200](../p200m/README.md) [#286](../p286m/README.md)
