# 239. Sliding Window Maximum (Hard)

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].

Note: 
You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.

Follow up:
Could you solve it in linear time?

## Solution
We scan the array from 0 to n-1, at each i, we keep “promising” elements, which are potentially max number in window [i-(k-1),i] or any subsequent window, in a deque. This implies the following cases,

1. If an element in the deque and it is out of i-(k-1), we discard them.
2. We also need to discard elements smaller than the new number added at i to the back of deque. Those numbers have no chance to be the max going forward.

The max of each sliding window will then be the head in deque.

#AMZN #GOOGL #Zenefits
#Heap #Deque
