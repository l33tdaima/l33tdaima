# Counting Bits (Medium)

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

### Example 1:
```
Input: 2
Output: [0,1,1]
```

### Example 2:
```
Input: 5
Output: [0,1,1,2,1,2]
```

### Follow up:
- It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
- Space complexity should be O(n).
- Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

## Solution
| n | binary | ans |
| - | ------ | --- |
| 0 | 0000   | 0   |
| 1 | 0001   | 1   |
| 2 | 0010   | 1   |
| 3 | 0011   | 2   |
| 4 | 0100   | 1   |
| 5 | 0101   | 2   |
| 6 | 0110   | 2   |
| 7 | 0111   | 3   |
| 8 | 1000   | 1   |
| 9 | 1001   | 2   |

To achieve the O(n) complexity we need leverage the answer from previous number and look for the transition formula. 

- For even number, LSB is 0, hence any even number's bit 1 count is the same as its half number, `>> 1`, i.e ans(8) = ans(4), ans(6) = (3)
- For odd number, LSB is 1, `>> 1` will lose one 1, we just need to add it back.

#Dynamic Programming #Bit Manipulation
