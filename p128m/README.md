# 128. Longest Consecutive Sequence (Medium)

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in `O(n)` time.

### Example 1:

```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

### Example 2:

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

### Constraints:

- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

## Solution

### Intuitive Approach

- Sort the array by O(NlogN);
- Walk through the array and count the longest.

### Optimal Approach

- Create a set of nums by walking through once;
- Then walk through the numbers again, but only start counting when the number is the lowest, no number smaller found in set
  - Checking a number existance in Set is O(1)

#GOOGL #FB
#GOOGL.MJ

#Array #Union Find #Hash Table
