# 76. Minimum Window Substring (Hard)

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
```
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".
```
Note:
- If there is no such window in S that covers all characters in T, return the empty string "".
- If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.

## Solution:
### Clarification
- Will T contain duplicate characters? Yes
- What kind of characters will be in the string? Which determines the lookup table size, 26, or 128, or 256.

### Intuitive Approach
- Find all the possible substrings, which is a O(N^2) scan,
  - For each of them check if they contains all the chars in T, which is another O(N) scan for the occurrence count

### Optimal Approach
There are a few min/max substring meeting certain conditions problem can be solved using the common pattern below,
- Use two pointers: start and end to represent a window.
- Move end to find a valid window.
- When a valid window is found, move start to find a smaller window to pursue the extreme value.

Addtionally for this problem we need a char map `tMap` whose key is ascii code, value is the occurence count and an overall counter to compute the matching status for each iteration,
- tMap[i] == 0 means char i is matched
- tMap[i] > 0 means char i needs to be matched by reducing to zero
- tMap[i] < 0 means char i is either not relevant or there is more occurence than T asks for

The similar two pointer sliding window strategy also applies array based problem like [#209m](../p209m/README.md) [#325m](../p325m/README.md).

#FB #UBER #LNKD #SNAP

#Hash Table #Two Pointers #String

#Similar question [#003m](../p003m/README.md) [#076h](../p076h/README.md) [#159h](../p159h/README.md)
