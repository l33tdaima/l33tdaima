# 159. Longest Substring with At Most Two Distinct Characters (Hard Subscription)

Given a string S, find the length of the longest substring T that contains at most two distinct characters.

### Example 1
```
Input: "eceba"
Output: 3
Explanation: t is "ece" which its length is 3.
```
### Example 2
```
Input: "ccaabbb"
Output: 5
Explanation: t is "aabbb" which its length is 5.
```

## Solution
### Clarification
- What kind of characters will be in the string? Which determines the lookup table size, 26, or 128, or 256.

### Intuitive Approach
- Find all the possible substrings, which is a O(N^2) scan,
  - For each of them check if they contains 2 distinct chars which is another O(N) scan for the occurrence count

### Optimal Approach
There are a few min/max substring meeting certain conditions problem can be solved using the common pattern below
- Use two pointers: start and end to represent a window.
- Move end to find a valid window.
- When a valid window is found, move start to find an optimal window.

#GOOGL

#Two Pointers #Hash Table #String

#Similar question [#003m](../p003m/README.md) [#076h](../p076h/README.md) [#159h](../p159h/README.md) [#340h](../p340h/README.md)
