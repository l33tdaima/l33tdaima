# 645. Set Mismatch (Easy)

The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

### Example 1:
```
Input: nums = [1,2,2,4]
Output: [2,3]
```

### Note:
1. The given array size will in the range [2, 10000].
2. The given array's numbers won't have any order.

## Solution
By using a hashset O(N) space approach is easy. What can we do to optimize the space complexity?

Since the values stored in array has 1-on-1 mapping to the index, we can use the value minus one as the index and mask the index has been visited by negating it. It is like adding this index in the hashset. If we see somewhere another number is also trying negating it but the value is already negative, we found the dup.

When iterating the array again, the remaining postive value's index + 1 is the missing number.

#Hash Table #Math
