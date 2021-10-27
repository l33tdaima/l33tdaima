# 75. Sort Colors (Medium)

Given an array nums with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

### Example 1:

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

### Example 2:

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

### Example 3:

```
Input: nums = [0]
Output: [0]
```

### Example 4:

```
Input: nums = [1]
Output: [1]
```

### Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?

## Solution

The hint to reach O(n) is that we only have three integers. Maintain two invariants, position of the first 1(white) `first1` and the first 2(blue) `last1`.
The invariants of algorithm is

- all 0's must be in front of first1
- all 2's must be behind last1

When iterating the array with termination condition `i <= fst2`, move 2 behind fst2, move 0 before fst1.

A.k.a. Dutch National Flag Problem

#FB #MSFT #Pocket Gems

#Sort #Array #Two Pointers
