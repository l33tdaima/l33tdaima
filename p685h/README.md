# 685. Redundant Connection II (Hard)

In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.

The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N), with one additional directed edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] that represents a directed edge connecting nodes u and v, where u is a parent of child v.

Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

### Example 1:
```
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given directed graph will be like this:
  1
 / \
v   v
2-->3
```
### Example 2:
```
Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
Output: [4,1]
Explanation: The given directed graph will be like this:
5 <- 1 -> 2
     ^    |
     |    v
     4 <- 3
```
### Note:
- The size of the input 2D-array will be between 3 and 1000.
- Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.

## Solution
There are two cases for the tree structure to be invalid,
- A node having two parents
- A circle exists
Both can exist to make the problem difficult, e.g
```
4 -> 2 -> 1 <- 3
|<--------|
1 has two parent 2 and 3, but we should return 2 -> 1 instead of 3 -> 1
```

- Iterate edges once, check whether there is a node V having two parents. If so, store them as candidates A and B, and set the second edge from B invalid in the input. 
- Iterate edges again (with dual parent edge removed), perform normal union find,
  - If detected a cycle
    - If no dual parent candidate set, return the current edge causing the cycle
    - Else we made a wrong guess on B, return candidate A
  - The tree is valid after iteration, B is a good guess return candidate B.

#GOOGL
#GOOGL.MJ

#Graph #Union Find

