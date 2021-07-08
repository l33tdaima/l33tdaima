# 378. Kth Smallest Element in a Sorted Matrix (Medium)

Given a `n x n` matrix where each of the rows and columns are sorted in ascending order, find the `kth` smallest element in the matrix.

Note that it is the `kth` smallest element in the sorted order, not the `kth` distinct element.

### Example 1:

```
Input: matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
```

### Example 2:

```
Input: matrix = [[-5]], k = 1
Output: -5
```

### Constraints:

- n == matrix.length
- n == matrix[i].length
- 1 <= n <= 300
- -10^9 <= matrix[i][j] <= 10^9
- All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
- 1 <= k <= n^2

## Solution

The idea is to maintain a minheap of size n,

- Initialize by filling it by the first row
- Iterate the following k times
  - Pop the min value from the heap
  - Push the next item in the same column

#GOOGLE #UBER

#Heap #Binary Search

#Similar question [#373m](../p373m/README.md) [#378m](../p378m/README.md)
