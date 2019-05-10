# 215. Kth Largest Element in an Array (Medium)

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.

## Solution:
### Intuitive Approach
Sort the array then pick the first K, O(N logN) + K

### Heap
A max heap based solution O(N + KlogN), or a max heap of size K, O(K + (N-K)logK).

### Quick select
A quick sort pivot based solution in JS.

#FB #MSFT #MSFT

#Divide and Conquer #Heap

#Similar questions [#215](../p215m/README.md) [#414](../p414e/README.md)
