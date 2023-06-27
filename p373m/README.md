# 373. Find K Pairs with Smallest Sums (Medium)

You are given two integer arrays `nums1` and `nums2` sorted in ascending order and an integer `k`.

Define a pair `(u,v)` which consists of one element from the first array and one element from the second array.

Find the `k` pairs `(u1,v1),(u2,v2) ...(uk,vk)` with the smallest sums.

### Example 1:

```
Input: nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

Output: [1,2],[1,4],[1,6]

Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
```

### Example 2:

```
Input: nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

Output: [1,1],[1,1]

Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
```

### Example 3:

```
Input: nums1 = [1,2], nums2 = [3],  k = 3

Output: [1,3],[2,3]

Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
```

### Constraints:

- `1 <= nums1.length, nums2.length <= 105`
- `-109 <= nums1[i], nums2[i] <= 109`
- `nums1` and `nums2` both are sorted in ascending order.
- `1 <= k <= 10^4`

## Solution

### Intuitives Approach

Let us say we have N1 numbers in nums1 and N2 numbers in nums2, we literally find the top k out of `N = N1 * N2` candidates. If using a heap of size K, we will do it in O(NlogK).

### Optimal Approach

```
      2   4   6
   +------------
 1 |  3   5   7
 7 |  9  11  13
11 | 13  15  17
```

Imagine we are looking at a matrix where each row and col are sorted, nums1 is row, and nums2 is col. The idea is to maintain a minheap of size N2,

- Initialize by filling it by the first row
- Iterate the following k times
  - Pop the min value from the heap
  - Push the next item in the same column

#GOOGLE #UBER

#Heap

#Similar question [#373m](../p373m/README.md) [#378m](../p378m/README.md)
