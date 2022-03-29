# 287. Find the Duplicate Number (Medium)

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only one repeated number in `nums`, return this repeated number.

You must solve the problem without modifying the array `nums` and uses only constant extra space.

### Example 1:

```
Input: [1,3,4,2,2]
Output: 2
```

### Example 2:

```
Input: [3,1,3,4,2]
Output: 3
```

### Constraints:

- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- All the integers in nums appear only once except for precisely one integer which appears two or more times.

### Follow up:

- How can we prove that at least one duplicate number must exist in nums?
- Can you solve the problem in linear runtime complexity?

## Solution

First of all, this is a search problem. Extra space like a hashtable is not allowed, then we ask ourselves what is the brutal force approach? Apparently, search if 1 has duplicate, then search if 2 has duplicate, 3, 4, a O(n^2) complexity is also not allowed. O(n) sounds too good to be true. It is highly possible a O(N \* log N) approach like binary search.

- Pick the mid, count how many less than mid, how many greater than mid, and how many equal to mid
- If mid has more than 1 occurrence, return mid
- If count of less than mid matches mid - lo, duplidate is on the other side
- Vice versa

The optimal O(N) solution is Floyd's Tortoise and Hare (Cycle Detection) Algorithm

#Array #Two Pointers #Binary Search

#Similar questions [#287](../p287m/README.md) [#442](../p442m/README.md)

Find single number [#136](../p136e/README.md) Find non-dup [#540m](../p540m/README.md)
