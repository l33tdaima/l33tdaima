# 76. Minimum Window Substring (Hard)

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

### Example 1:

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

### Example 2:

```
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

### Example 3:

```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

### Constraints:

- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 10^5`
- `s` and `t` consist of uppercase and lowercase English letters.

## Solution:

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

#FB #AMZN #UBER #LNKD #GOOGL #MSFT

#Hash Table #Two Pointers #String

#Similar question [#003m](../p003m/README.md) [#076h](../p076h/README.md) [#159h](../p159h/README.md)

#Explore Facebook
