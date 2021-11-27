# 238. Product of Array Except Self (Medium)

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

### Example 1:

```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

### Example 2:

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

### Constraints:

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

## Solution

### O(n) Space Approach

The idea is to store the product left to the current element into an array, then the product right to the current element into another array. Finally the product of these two arrays.

### O(1) Space Approach

The idea is the same, after folding left for the product to the left of each element, we can combine the fold right and multiplying it to left product, into the same array. Hence drop the space complexity to O(1).

#FB #MSFT #AMZN #LNKD #APPL

#Array

#Explore Facebook
