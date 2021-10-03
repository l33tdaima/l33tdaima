# 55. Jump Game (Medium)

You are given an integer array `nums`. You are initially positioned at the array's _first index_, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

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

### Constraints:

- 1 <= nums.length <= 10^4
- 0 <= nums[i] <= 10^5

## Solution

### Intuitive Approach

From the first glance, it looks like a backtracking problem where from the starting index try each of index it can reach, see if recursively we can reach the end, otherwise backtrace and the next. Exponential complexity.

Then we notice that a index is reachable (the solution is whether the last index is reachable) is logical OR of (every index before it AND the value is greater or equal to their distance), plus memorize the state of an index is reachable or not. This will O(n^2) complexity.

### Optimal Solution

From begin to end, we just need to keep updating the furthest point it can reach, return false if i surpass the furthest reachable point, because reachable stopped at some point.

#Array #Greedy

#Similar questions [#45](../045m/README.md) [#55](../p055m/README.md) [#1306](../pr1306m/README.md)
