# 581. Shortest Unsorted Continuous Subarray (Easy)

Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

### Example 1:
```
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

### Note:
1. Then length of the input array is in range [1, 10,000].
2. The input array may contain duplicates, so ascending order here means <=.

## Solution
### Using sort
Sort the array then compare the sorted with the original for the leftmost and rightmost indices. Time complexity of O(N logN + N), space complexity of O(N).

### Optimal Approach
To improve, we notice that we don't need to sort the array, the leftmost index should have the value just less than the `min` of unsorted subarray candidate, the rightmost index should have the value just greater than the `max` of unsorted subarray candidate, where the unsorted subarray can be deduced by noticing value going down from the left and going up from the right. Hence this `max` can be searched from left, and the 'min' can be searched from right.

#BBG #Cruise Automation #AMZN #LiveRamp #GOOGL

#Array
