#340. Longest Substring with At Most K Distinct Characters (Hard)

Given a string, find the length of the longest substring T that contains at most k distinct characters.

### Example 1:
```
Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
```

### Example 2:
```
Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
```

## Solution
### Intuitive Approach
How large is the search space? N + (N-1) + ... + 2 + 1 different substring. For each substring, check if their distinct char <= k, and maintain a moving maxLen. O(N^2)

### Optimal Approach O(N)
- We approach by trying to solve the maxLen for substring ending with `s[i], i=0..N-1`.
- We need to remember the count of each char, when a count changes from 0 to 1, distinct ++, otherwise, distinct --
- Whenever we find distinct > k, we need to move forward the substrStart index in order to satisfy the restriction
- `maxLen = max(maxLen, i - substrStart + 1)`

#FB #AMZN #UBER #GOOGL #BBG #MSFT
#GOOGL.MJ

#Hash Table #String

#Explore Facebook

#Similar question [#159h](../p159h/README.md) [#340h](../p340h/README.md)
