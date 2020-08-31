# 952. Largest Component Size by Common Factor (Hard)

Given a non-empty array of unique positive integers A, consider the following graph:

- There are A.length nodes, labelled A[0] to A[A.length - 1];
- There is an edge between A[i] and A[j] if and only if A[i] and A[j] share a common factor greater than 1.

Return the size of the largest connected component in the graph.

### Example 1:
```
Input: [4,6,15,35]
Output: 4
```
![ex1](./ex1.png)

### Example 2:
```
Input: [20,50,9,63]
Output: 2
```
![ex2](./ex2.png)

### Example 3:
```
Input: [2,3,6,7,4,12,21,39]
Output: 8
```
![ex3](./ex3.png)

### Note:
- 1 <= A.length <= 20000
- 1 <= A[i] <= 100000

## Solution
- For each node, find its prime divisor set
- Append the index of node into a dict key by prime factor, for example 3, we will have
```
2: [0,2,4,5], 3:[1,2,5,6,7], 7:[3,6], 13:[7]
```
- Create a union-find (Disjoint Set) data structure
- Iterate the dict and run quick union command for each pair
- Iteratre the union-find array, count the root, return the maximum 

#Math #Union Find
