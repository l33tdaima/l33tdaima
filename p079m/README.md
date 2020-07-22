# 79. Word Search (Medium)

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

### Example
```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
Given word = "ABCCED", returns true,
Given word = "SEE", returns true,
Given word = "ABCB", returns false.
```

### Constraints:
- board and word consists only of lowercase and uppercase English letters.
- 1 <= board.length <= 200
- 1 <= board[i].length <= 200
- 1 <= word.length <= 10^3


## Solution
Scan the board and do DFS search from each cell and word index 0
- If the char matches, mark it has been used, and do DFS with index + 1 on 4 adjacent cells, mark unused after return from DFS.
- If not matches, or has been used, or out of boundary, return false.

#FB #MSFT #BBG

#Array #Backtracking
