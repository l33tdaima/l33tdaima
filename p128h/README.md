# 128. Longest Consecutive Sequence (Hard)

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

### Example:
```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

## Solution
### Intuitive Approach
- Sort the array by O(NlogN);
- Walk through the array and count the longest.

### Optimal Approach
- Create a set of nums by walking through once;
- Then walk through the numbers again, but only start counting when the number is the lowest, no number smaller found in set
  - Checking a number existance in Set is O(1)

#GOOGL #FB

#Array #Union Find #Hash Table