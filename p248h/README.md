# 248. Strobogrammatic Number III (Hard)

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to count the total strobogrammatic numbers that exist in the range of low <= num <= high.

### Example:
```
Input: low = "50", high = "100"
Output: 3 
Explanation: 69, 88, and 96 are three strobogrammatic numbers.
```
### Note:
Because the range might be a large number, the low and high numbers are represented as string.

## Solution
From a base string of `["", "0", "1", "8"]` in the middle of candidate numbers, recusively call the helper function which inserts front and pushs back a pair of strogogrammic digits. Count each of them if falling into the range.

#GOOGL

#Math #Recursion

#Similar questions [#246e](../p246e/README.md) [#247m](../p247m/README.md) [#248h](../p248h/README.md)
