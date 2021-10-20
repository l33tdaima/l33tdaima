# 207. Course Schedule (Medium)

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array prerequisites where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
Return `true` if you can finish all courses. Otherwise, return `falsse`.

### Example 1:

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
```

### Example 2:

```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```

### Constraints:

- `1 <= numCourses <= 10^5`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- All the pairs `prerequisites[i]` are unique.

### Hints:

- This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.
- Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.
- Topological sort could also be done via BFS.

## Solution

### DFS

- Convert to a graph representation to adjencency list: node -> all its prerequisites/dependencies
- Create the visited bool array/map to keep visited record, initialize to all false;
- We need another onPath array to keep visited record for the current DFS path,
  - Reset onPath[vertex] before returning recursive cycle check.
  - If onPath[vertex] true, we found a cycle

### BFS (Kahn Algorithm)

- Build a adjencency list and indegree array
- Add all vertices of indegree 0 to queue
- Remove a vertex from queue and remove it from graph,
  - all dependency vertices indegree minus one
  - add to the queue when indegree reaches to zero

#UBER #APPL #Zenefits #YELP

#Depth-first Search #Breath-first Search #Graph #Topological Sort

#Similar questions [#207m](../p207m/README.md) [#210m](../p210m/README.md)
