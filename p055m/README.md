# 55. Jump Game (Medium)

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

### Example 1:

```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

### Example 2:

```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

## Solution

### Intuitive Approach

From the first glance, it looks like a backtracking problem where from the starting index try each of index it can reach, see if recursively we can reach the end, otherwise backtrace and the next. Exponential complexity.

Then we notice that a index is reachable (the solution is whether the last index is reachable) is logical OR of (every index before it AND the value is greater or equal to their distance), plus memorize the state of an index is reachable or not. This will O(n^2) complexity.

### Optimal Solution

From begin to end, we just need to keep updating the furthest point it can reach, return false if i surpass the furthest reachable point, because reachable stopped at some point.

#Array #Greedy

#Similar questions [055m](../p055m/README.md) [1306m](../pr1306m/README.md)
