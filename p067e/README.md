# 67. Add Binary (Easy)

Given two binary strings `a` and `b`, return their sum as a binary string.

### Example 1:

```
Input: a = "11", b = "1"
Output: "100"
```

### Example 2:

```
Input: a = "1010", b = "1011"
Output: "10101"
```

### Constraints:

- `1 <= a.length, b.length <= 10^4`
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

## Solution

- Scan from back of two string until reaching the begins of both and no more carry,
  - compute the carry of each bit by adding previous carry to the current bit of a and b, fill 0 if already reaching to the beginning
  - convert the carry number to '1' or '0'
  - prefix the new carry character

#FB #AMZN #ADBE

#Math #String

#Explore Facebook
