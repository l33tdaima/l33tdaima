# 287. Find the Duplicate Number (Medium)

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

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

### Note:
1. You must not modify the array (assume the array is read only).
2. You must use only constant, O(1) extra space.
3. Your runtime complexity should be less than O(n^2).
4. There is only one duplicate number in the array, but it could be repeated more than once.

## Solution
First of all, this is a search problem. Extra space like a hashtable is not allowed, then we ask ourselves what is the brutal force approach? Apparently, search if 1 has duplicate, then search if 2 has duplicate, 3, 4, a O(n^2) complexity is also not allowed. O(n) sounds too good to be true. It is highly possible a O(N * log N) approach like binary search.

- Pick the mid, count how many less than mid, how many greater than mid, and how many equal to mid
- If mid has more than 1 occurrence, return mid
- If count of less than mid matches mid - lo, duplidate is on the other side
- Vice versa

The optimal O(N) solution is Floyd's Tortoise and Hare (Cycle Detection) Algorithm

#Array #Two Pointers #Binary Search
