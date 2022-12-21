# 886. Possible Bipartition (Medium)

We want to split a group of `n` people (labeled from `1` to `n`) into two groups of **any size**. Each person may dislike some other people, and they should not go into the same group.

Given the integer `n` and the array dislikes where `dislikes[i] = [ai, bi]` indicates that the person labeled `ai` does not like the person labeled `bi`, return `true` if it is possible to split everyone into two groups in this way.

### Example 1:

```
Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
```

### Example 2:

```
Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
```

### Example 3:

```
Input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false
```

### Constraints:

- `1 <= n <= 2000`
- `0 <= dislikes.length <= 10^4`
- `dislikes[i].length == 2`
- `1 <= dislikes[i][j] <= n`
- `ai < bi`
- All the pairs of dislikes are unique.

## Solution

Consider the graph on `n` people formed by the given "dislike" edges. We want to check that each connected component of this graph is bipartite.

Color any node red, then all of it's neighbors blue, then all of those neighbors red, and so on. If we ever color a red node blue (or a blue node red), then we've reached a conflict.

#Depth-first Search

#Similar questions [#785](../p785m/README.md) [#886](../p886m/README.md)
