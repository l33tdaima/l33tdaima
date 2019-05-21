# 949. Largest Time for Given Digits (Easy)

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

### Example 1:
```
Input: [1,2,3,4]
Output: "23:41"
```
### Example 2:
```
Input: [5,5,5,5]
Output: ""
```

### Note:
1. A.length == 4
2. 0 <= A[i] <= 9

## Solution
There are too many corner cases, so it's easier to just brute-force all 24 combinations and find the maximum over valid ones.

Python itertools package has permutations function handy, but we need to know how to implement our own.

#LiveRamp

#Math

#Similar questions [#046](../p046m/README.md) [#949e](../p949e/README.md)
