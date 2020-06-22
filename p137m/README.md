# 137. Single Number II (Medium)

Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

### Example 1:
```
Input: [2,2,3,2]
Output: 3
```

### Example 2:
```
Input: [0,1,0,1,0,1,99]
Output: 99
```

## Solution
Not like p136 where we only need one bit to record the states, we now need two bits to record 3 states (up to 4).

- First time number appear -> save it in "lsb", 
- Second time -> clear "lsb" but save it in "msb"
- Third time -> try to save in "ones" but value saved in "twos" clear it.

The true value table for state transition is like,
```
current   incoming  next
M L            C    M L
0 0            0    0 0
0 1            0    0 1
1 0            0    1 0
0 0            1    0 1
0 1            1    1 0
1 0            1    0 0

M = (M ^ C) & ~L
L = (L ^ C) & ~M
```

#Bit Manipulation
