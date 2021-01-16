# 215. Kth Largest Element in an Array (Medium)

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

### Example 1:

```
Input: [3,2,1,5,6,4] and k = 2
Output: 5
```

### Example 2:

```
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
```

### Note:

You may assume k is always valid, 1 ≤ k ≤ array's length.

## Solution:

### Intuitive Approach

Sort the array descending then pick the (K-1)th, or sort accending then pick the (len - K)th. O(NlogN)

### Heap

A max heap based solution O(N + KlogN), or a max heap of size K, O(K + (N-K)logK).

### Quick select

A quick sort pivot based solution in JS.

#FB #MSFT #MSFT

#Divide and Conquer #Heap

#Similar questions [#215](../p215m/README.md) [#414](../p414e/README.md)
