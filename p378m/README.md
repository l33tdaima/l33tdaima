# 378. Kth Smallest Element in a Sorted Matrix (Medium)

Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

### Example:
```
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
```

### Note: 
You may assume k is always valid, 1 ≤ k ≤ n2.

## Solution
The idea is to maintain a minheap of size n,
- Initialize by filling it by the first row
- Iterate the following k times
  - Pop the min value from the heap
  - Push the next item in the same column

#GOOGLE #UBER

#Heap #Binary Search

#Similar question [#373m](../p373m/README.md) [#378m](../p378m/README.md)