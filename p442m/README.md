# 442. Find All Duplicates in an Array (Medium)

Given an integer array `nums` of length `n` where all the integers of nums are in the range `[1, n]` and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

### Example 1:

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
```

### Example 2:

```
Input: nums = [1,1,2]
Output: [1]
```

### Example 3:

```
Input: nums = [1]
Output: []
```

### Constraints:

- n == nums.length
- 1 <= n <= 10^5
- 1 <= nums[i] <= n
- Each element in nums appears once or twice.

## Solution

The intuitive solution is to add a number seen into a hash table, if this number is seen again which exists in hash table, we have an answer.

The constraint is we can't have extra space, what can we do? Use the given array as an hash table!

- 1 ≤ a[i] ≤ n indicates array index can be used as hash key and value.
- Appear twice indicates we can use sign (a boolean information) as hash value.

#Pocket Gems #FB #AMZN

#Array #Hash Table

#Similar questions: [#287](../p287m/README.md) [#442](../p442m/README.md) [#448](../p448e/README.md) which actually is harder
