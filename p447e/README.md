# 447. Number of Boomerangs (Easy)

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

### Example:
```
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
```

## Solution
### Intuitive Approach
For each the point in given input [p1, p2, p3, ..., pN], compute the distance, and hash map (distance, count). When we have count > 1, the permutation(count, 2) = count * (count - 1) boomerangs should be contributed to the total.

#AMZN

#Hash Table

