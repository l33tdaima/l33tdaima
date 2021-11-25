# 53. Maximum Subarray (Easy)

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A _subarray_ is a _contiguous_ part of an array.

### Example:

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

### Example 2:

```
Input: nums = [1]
Output: 1
```

### Example 3:

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

### Constraints:

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

_Follow up:_ If you have figured out the O(n) solution, try coding another solution using the _divide and conquer_ approach, which is more subtle.

## Solution

The DP state `maxSubArray[i]` is defined as the max sum of all the subarray ending at `i`, the new state is the previous state plus the element `i` or just element `i`, whichever is greater,

```
maxSubArray(i) = maxSubArray(i-1) > 0 ? maxSubArray(i-1) + nums[i] : nums[i]
```

or

```
maxSubArray(i) = max(maxSubArray(i-1), 0) + nums[i]
```

Another way to understand the algorithm is scan the array and add each element into a local sum, update the global sum if a larger one is found. And if the sum drops below zero, we need to reset the local sum to zero, which means all the elements before the point has negative contribution, we should not consider them in the future subarray.

#MSFT #BBG #LNKD #AMZN

#Array #Dynamic Programming

#Similar Questions [#53](../p053e/README.md) [#152](../p152m/README.md) [#918](../p918m/README.md)
