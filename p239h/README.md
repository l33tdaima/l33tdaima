# 239. Sliding Window Maximum (Hard)

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

### Example 1:

```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

### Example 2:

```
Input: nums = [1], k = 1
Output: [1]
```

### Example 3:

```
Input: nums = [1,-1], k = 1
Output: [1,-1]
```

### Example 4:

```
Input: nums = [9,11], k = 2
Output: [11]
```

### Example 5:

```
Input: nums = [4,-2], k = 2
Output: [4]
```

### Constraints:

- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- 1 <= k <= nums.length

## Solution

Iterate `nums`, at each i, we maintain a deque of index which the values are monotonically decreasing, the max is hence the head of the deque. The question is how to maintain this deque so that we can extract max out of it.

1. If an element in the deque and it is out of i-(k-1), we discard them.
2. We also need to discard elements smaller than the new number added at i to the back of deque. Those numbers have no chance to be the max going forward.

#AMZN #GOOGL #Zenefits

#Heap #Deque

#Similar questions [#239](../p239h/README.md) [#1696](../pr1696m/README.md)
