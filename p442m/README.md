# 442. Find All Duplicates in an Array (Medium)

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

### Example:
```
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
```

## Solution
The intuitive solution is to add a number seen into a hash table, if this number is seen again which exists in hash table, we have an answer. 

The constraint is we can't have extra space, what can we do? Use the given array as an hash table!
- 1 ≤ a[i] ≤ n indicates array index can be used as hash key and value.
- Appear twice indicates we can use sign (a boolean information) as hash value.

#Pocket Gems

#Array

#Similar questions: [#287](../p287m/README.md) [#442](../p442m/README.md) [#448](../p448e/README.md) which actually is harder
