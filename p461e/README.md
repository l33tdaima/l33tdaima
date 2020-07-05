# 461. Hamming Distance (Easy)

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 2^31.

### Example:
```
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
```

## Solution
When count bits for the xor, use Brian Kernighan's algorithm which can remove the rightmost set bit in one iteration no matter where it is.
For example, only two iterations to count 1000100,
```
1. 1000100 & 1000011 = 1000000, count = 1
2. 1000000 & 0111111 = 0, count = 2
``` 
instead of 7 iterations

#FB

#Bit Manipulation
