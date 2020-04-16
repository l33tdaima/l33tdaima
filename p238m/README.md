# 238. Product of Array Except Self (Medium)

Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

### Example
```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

*Constraint*: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Solve it *without division* and in O(n).

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

## Solution
### O(n) Space Approach
The idea is to store the product left to the current element into an array, then the product right to the current element into another array. Finally the product of these two arrays.

### O(1) Space Approach
The idea is the same, after folding left for the product to the left of each element, we can combine the fold right and multiplying it to left product, into the same array. Hence drop the space complexity to O(1).

#FB #MSFT #AMZN #LNKD #APPL

#Array

#Explore Facebook
