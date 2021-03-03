# 645. Set Mismatch (Easy)

You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

### Example 1:

```
Input: nums = [1,2,2,4]
Output: [2,3]
```

### Example 2:

```
Input: nums = [1,1]
Output: [1,2]
```

### Note:

- 2 <= nums.length <= 10^4
- 1 <= nums[i] <= 10^4

## Solution

By using a hashset O(N) space approach is easy. What can we do to optimize the space complexity?

Since the values stored in array has 1-on-1 mapping to the index, we can use the value minus one as the index and mask the index has been visited by negating it. It is like adding this index in the hashset. If we see somewhere another number is also trying negating it but the value is already negative, we found the dup.

When iterating the array again, the remaining postive value's index + 1 is the missing number.

#Hash Table #Math
