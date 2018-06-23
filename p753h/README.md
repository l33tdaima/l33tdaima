# 753. Cracking the Safe (Hard)

There is a box protected by a password. The password is n digits, where each letter can be one of the first k digits 0, 1, ..., k-1.

You can keep inputting the password, the password will automatically be matched against the last n digits entered.

For example, assuming the password is "345", I can open it when I type "012345", but I enter a total of 6 digits.

Please return any string of minimum length that is guaranteed to open the box after the entire string is inputted.

### Example 1:
```
Input: n = 1, k = 2
Output: "01"
Note: "10" will be accepted too.
```
### Example 2:
```
Input: n = 2, k = 2
Output: "00110"
Note: "01100", "10011", "11001" will be accepted too.
```

### Note:
- n will be in the range [1, 4].
- k will be in the range [1, 10].
- k^n will be at most 4096.

## Solution
The brutal force string is to concatenate all the possible `k^n` combination with a total length of `n * k^n`. The minimum length we can achieve to to reuse `n-1` digits in the previous combination and add `1` digit to form the new combination, which drops the length to `(n-1) + k^n`.

The problem is now how to find a shortest path travelling all the `k^n` vertics in a graph, each vertex is a combination with `k-1` edges to other combinations with one digit different.

Start from any vertex, DFS through every possible edge with minimal length as the end condition.

#GOOGL

#Math #Depth-first Search #Backtracking