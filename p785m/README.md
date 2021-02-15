# 785. Is Graph Bipartite? (Medium)

There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

- There are no self-edges (graph[u] does not contain u).
- There are no parallel edges (graph[u] does not contain duplicate values).
- If v is in graph[u], then u is in graph[v] (the graph is undirected).
- The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.

A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

Return true if and only if it is bipartite.

### Example 1:

```
0----1
| \  |
|  \ |
3----2

Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
Output: false
Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.
```

### Example 2:

```
0----1
|    |
|    |
3----2

Input: graph = [[1,3],[0,2],[1,3],[0,2]]
Output: true
Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.
```

### Constraints:

- graph.length == n
- 1 <= n <= 100
- 0 <= graph[u].length < n
- 0 <= graph[u][i] <= n - 1
- graph[u] does not contain u.
- All the values of graph[u] are unique.
- If graph[u] contains v, then graph[v] contains u.

## Solution

### Clarification

Is the graph connected or could be disconnected?
Could be disconnected, which means we have dangling nodes.

### Algorithm BFS

- Create a lookup table, an array indexed with node id,
  - true means group A(T)
  - false means group B(F)
  - undefined means the node has not been visited before
- Scan each node in graph, skip if has been visited
- If not been visited before, just group it True, push queue to start a new BFS
  - pop current node
  - check its neighbors
    - push queue for next round if not visited before
    - expect it to be oppsite to current node

#FB

#Graph #Depth-first Search #Breadth-first Search

#Similar questions [#785](../p785m/README.md) [#886](../p886m/README.md)
