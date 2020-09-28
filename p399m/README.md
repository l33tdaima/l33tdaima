# 399. Evaluate Division (Medium)

Equations are given in the format `A / B = k`, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

### Example 1:
```
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
```

### Example 2:
```
Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]
```

### Example 3:
```
Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
```

## Solution
### DFS Approach
- Convert the edge representation to adjacency list represented weighted graph like the following,
```
a: {{b:2}},
b: {{c:3}, {a:0.5}},
c: {{b:0.333333}},
```
- Use DFS to search a path from query.first to query.second in the graph, pass along the product of weight(quotient)
Time complexity O(e + q*e), Space complexity O(e).

### Union-Find Approach
- Create union-find structure implemented by map, treat divisor as parent, and store quotient in parent node, from equation(edge) and values input, with the following cases, `x/y = k`
  - Both don't exist before
  - x doesn't exist
  - y doesn't exist
  - Both exist, union them
```
Dump parents: {
  b: (b, 1)
  c: (b, 0.333333)
  a: (b, 2)
}
```
- Derive the results with the following cases
  - One of them doesn't exist: -1.0
  - They are the same: 1.0
  - They don't have the same parents: -1.0
  - They have the same parents: x/y = (x/r) / (y/r)

#GOOGL
#GOOGL.MJ

#Graph #DFS #Union Find
