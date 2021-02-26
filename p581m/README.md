# 581. Shortest Unsorted Continuous Subarray (Medium)

Given an integer array `nums`, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

### Example 1:

```
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

### Example 2:

```
Input: nums = [1,2,3,4]
Output: 0
```

### Example 3:

```
Input: nums = [1]
Output: 0
```

### Constraints:

- 1 <= nums.length <= 10^4
- -10^5 <= nums[i] <= 10^5

## Solution

### Using sort

Sort the array then compare the sorted with the original for the leftmost and rightmost indices. Time complexity of O(N logN + N), space complexity of O(N).

### Optimal Approach

To improve, we notice that we don't need to sort the array, the leftmost index should have the value just less than the `min` of unsorted subarray candidate, the rightmost index should have the value just greater than the `max` of unsorted subarray candidate, where the unsorted subarray can be deduced by noticing value going down from the left and going up from the right. Hence this `max` can be searched from left, and the `min` can be searched from right.

#BBG #Cruise Automation #AMZN #LiveRamp #GOOGL

#Array
