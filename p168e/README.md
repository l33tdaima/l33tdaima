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
## Solution
Extract from the least significent digit (`0-25`) by `(n-1) mod 26` to most significent digit, map to A-Z, then build up the string.

#FB #MSFT

#Math
