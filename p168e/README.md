# 168. Excel Sheet Column Title (Easy)

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:
```
    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
```
### Example 1:
```
Input: 1
Output: "A"
```
### Example 2:
```
Input: 28
Output: "AB"
```
### Example 3:
```
Input: 701
Output: "ZY"
```

## Solution
Extract from the least significent digit (`0-25`) by `(n-1) mod 26` to most significent digit, map to A-Z, then build up the string.

#FB #MSFT

#Math

#Similar questions [#168](../p168e/README.md) [#171](../p171e/README.md)
