# 869. Reordered Power of 2 (Medium)

Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

### Example 1:

```
Input: 1
Output: true
```

### Example 2:

```
Input: 10
Output: false
```

### Example 3:

```
Input: 16
Output: true
```

### Example 4:

```
Input: 24
Output: false
```

### Example 5:

```
Input: 46
Output: true
```

### Note:

- 1 <= N <= 10^9

## Solution

We just need to find a signature function to check if N's signature is matching one of the Power of 2 numbers (32).

This signature function can be many choices

- A long number of accumulating all the digits like `n0*10^0 + n1*10^1 + ... + n9*10^9`
- A Counter counting the occurences of the each digit
- A sorted number in string

#Math
