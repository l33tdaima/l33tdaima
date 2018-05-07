# 207. Course Schedule (Medium)

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

### Example 1:
```
Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
```

### Example 2:
```
Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
```
### Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.

### Hints:
- This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
- Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
- Topological sort could also be done via BFS.

## Solution
- Convert to a graph representation of an array of linked nodes for each node;
- Create the visited bool array/map to keep visited record, initialize to all false;
- We need another onPath array to keep visited record for the current DFS path, 
  - Reset onPath[vertex] before returning recursive cycle check.
  - If onPath[vertex] true, we found a cycle

#UBER #APPL #Zenefits #YELP

#Depth-first Search #Breath-first Search #Graph #Topological Sort

#Similar questions [#207m](../p207m/README.md) [#210m](../p210m/README.md)