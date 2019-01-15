# 371. Sum of Two Integers (Easy)

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

### Example 1:
```
Input: a = 1, b = 2
Output: 3
```

### Example 2:
```
Input: a = -2, b = 3
Output: 1
```

## Solution
We will leverage
1. bit and operation to find the carry bit, and
2. xor operation to find the addition of the bits except the case `(1, 1)` which is captured by the carry bits.

Then carry bit should be shifted left to produce the result on the more significant bit.

#FB

#Bit Manipulation
