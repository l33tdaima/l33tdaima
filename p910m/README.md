# 910. Smallest Range II (Medium)

Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

### Example 1:

```
Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
```

### Example 2:

```
Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
```

### Example 3:

```
Input: A = [1,3,6], K = 3
Output: 3
Explanation: B = [4,6,3]
```

### Note:

1. 1 <= A.length <= 10000
2. 0 <= A[i] <= 10000
3. 0 <= K <= 10000

## Solution

- Sort A
- There is a point `i` where 0 <= i < len, on the left of i, all the elements add K, on the right of i, all the elements minus K. After this process, B will be rotated sorted. Loop through i, basically we are trying all possibilities of point `i`.

#Math #Greedy

#Similar questions [#908](../p908e/README.md) [#910](../p910m/README.md)
