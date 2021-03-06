# 665. Non-decreasing Array (Medium)

Given an array `nums` with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if `nums[i] <= nums[i + 1]` holds for every i (0-based) such that (0 <= i <= n - 2).

### Example 1:

```
Input: [4,2,3]
Output: True
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
```

### Example 2:

```
Input: [4,2,1]
Output: False
Explanation: You can't get a non-decreasing array by modify at most one element.
```

### Constraints:

- n == nums.length
- 1 <= n <= 10^4
- -10^5 <= nums[i] <= 10^5

## Solution

Let p be the unique index for which `A[p] > A[p+1]`. If this is not unique or doesn't exist, the answer is False or True respectively.

- If `p = 0`, then we could make the array good by setting `A[p] = A[p+1]`.
- If `p = len(A) - 2`, then we could make the array good by setting `A[p+1] = A[p]`.
- Otherwise, `A[p-1], A[p], A[p+1], A[p+2]` all exist, and:
  - We could change `A[p]` to be between `A[p-1]` and `A[p+1]` if possible, or;
  - We could change `A[p+1]` to be between `A[p]` and `A[p+2]` if possible.

#BBG #GOOGL

#Array
