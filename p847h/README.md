# 847. Shortest Path Visiting All Nodes (Hard)

You have an undirected, connected graph of n nodes labeled from `0` to `n - 1`. You are given an array graph where `graph[i]` is a list of all the nodes connected with node `i` by an edge.

Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

### Example 1:

![example1](example1.jpeg)

```
Input: graph = [[1,2,3],[0],[0],[0]]
Output: 4
Explanation: One possible path is [1,0,2,0,3]
```

### Example 2:

```
Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]
```

### Constraints:

- `n == graph.length`
- `1 <= n <= 12`
- `0 <= graph[i].length < n`
- `graph[i]` does not contain `i`.
- If `graph[a]` contains `b`, then `graph[b]` contains `a`.
- The input graph is always connected.

## Solution

- Instead of vanilla BFS from one node, start BFS from all the nodes simultaneously
- In vanilla BFS we need to maintain a visited set, here we use a bitmap to record the state of visiting, the tuple of visiting state bitmask and current node is memorized to avoid cycle.
- Since BFS, the first path with bitmask of all set bits is the shortest path.

#Dynamic Programming #Bit Manipulation #Breadth-First Search #Graph #Bitmask
