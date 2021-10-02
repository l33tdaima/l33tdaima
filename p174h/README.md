# 174. Dungeon Game (Hard)

The demons had captured the princess and imprisoned her in the _bottom-right corner_ of a `dungeon`. The `dungeon` consists of `m x n` rooms laid out in a 2D grid. Our valiant knight was initially positioned in the _top-left room_ and must fight his way through `dungeon` to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to `0` or below, he dies immediately.

Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).

To reach the princess as quickly as possible, the knight decides to move only _rightward_ or _downward_ in each step.

Return the knight's minimum initial health so that he can rescue the princess.

Note that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

### Example 1:

|       |     |        |
| ----- | --- | ------ |
| -2(K) | -3  | 3      |
| -5    | -10 | 1      |
| 10    | 30  | -5 (P) |

```
Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
Output: 7
Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-> RIGHT -> DOWN -> DOWN.
```

### Example 2:

```
Input: dungeon = [[0]]
Output: 1
```

### Constraints:

- `m == dungeon.length`
- `n == dungeon[i].length`
- `1 <= m, n <= 200`
- `-1000 <= dungeon[i][j] <= 1000`

## Solution

Define `hp[i][j]` as the mininum health the knight needs upon entering room (i, j), where i = 0..M, j = 0..N. The last row and col of hp matrix, has initial value of hp[M, N - 1], hp[M - 1, N] = 1, 1 meanning the knight can survive the last room with just health of 1, and rest are Inf as boundary.

The state transition is

```
hp[i, j] = max(min(hp[i, j + 1], hp[i + 1, j]) - dungeon[i][j], 1)
```

The knight pick the smaller HP after fight in the room, then go to the next room right or down. However he can't have negative HP even the room revives his health.

#Binary Search #Dynamic Programming
