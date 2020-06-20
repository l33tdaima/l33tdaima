# 1044. Longest Duplicate Substring (Hard)

Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  (The occurrences may overlap.)

Return any duplicated substring that has the longest possible length.  (If S does not have a duplicated substring, the answer is "".)

### Example 1:
```
Input: "banana"
Output: "ana"
```

### Example 2:
```
Input: "abcd"
Output: ""
```
 
### Note:
1. 2 <= S.length <= 10^5
2. S consists of lowercase English letters.

## Solution
### Intuitive Approach
For all the substring O(N^2) find the largest duplicate

### Binary Search
- Binary search the length of longest duplicate substring and call the help function test(L).
- test(L) slide a window of length L, run O(N*L) to see if the length L substring has a duplicate, this is still a TLE
- Use Rabin-Karp algorithm rolling hash the string in this window

#Hash Table #Binary Search
