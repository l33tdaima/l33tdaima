# 448. Find All Numbers Disappeared in an Array (Easy)

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in nums.

### Example 1:

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
```

### Example 2:

```
Input: nums = [1,1]
Output: [2]
```

### Constraints:

- `n == nums.length`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= n`

_Follow up_: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

## Solution

1. First iteration to negate values at position whose equal to values appear in array.
2. Second iteration to collect all position whose value is positive, which are the missing values. Complexity is O(n) Time and O(1) space.

#GOOGL

#Array
