# 261. Graph Valid Tree (Medium)

Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

### Example 1:
```
Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true
```
### Example 2:
```
Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false
```
*Note*: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.

## Solution:
To tell whether a graph is a valid tree, we have to:
- Make sure there is no cycle in the graph - this has to be a none-cyclic graph.
- Make sure every node is reached - this has to be a connected graph.

### DFS Approach
- Convert edges into a adjacent list representation, call it `graph`.
- Traverse from any one of the node, say 0 to check cycle:
  - Remember to not check the from node when looping the adjacent list.
- Loop graph node, making sure they are all visited.

### Union Find Approach
- Create an array of `node`, 0 to n-1, initially isolated, value -1.
- Iterate every edge [a, b]:
  - return false if find(a) == find(b);
  - union them: node[find(b)] = find(a).
- If no cycle found above, make sure edge length === n-1, all nodes are connected.

#GOOGL #FB #Zenefits

#Depth-first Search #Breadth-first Search #Union Find #Graph
