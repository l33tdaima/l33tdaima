# 247. Strobogrammatic Number II (Medium)

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

### Example:
```
Input:  n = 2
Output: ["11","69","88","96"]
```

## Solution
From a base string of `""` (even case) or `["0", "1", "8"]` (odd case) in the middle of candidate numbers, recusively call the helper function which inserts front and pushs back a pair of strogogrammic digits. O(5 ^ (n/2))

#FB #GOOGL

#Similar questions [#246e](../p246e/README.md) [#247m](../p247m/README.md) [#248h](../p248h/README.md)
