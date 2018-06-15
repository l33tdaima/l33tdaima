#340. Longest Substring with At Most K Distinct Characters (Hard)

Given a string, find the length of the longest substring T that contains at most k distinct characters.

For example, Given s = “eceba” and k = 2,

T is "ece" which its length is 3.

## Solution
### Intuitive Approach
How large is the search space? N + (N-1) + ... + 2 + 1 different substring. For each substring, check if their distinct char <= k, and maintain a moving maxLen. O(N^2)

### Optimal Approach O(N)
- We approach by trying to solve the maxLen for substring ending with `s[i], i=0..N-1`.
- We need to remember the count of each char, when a count changes from 0 to 1, distinct ++, distinct --, vice versa.
- Whenever we find distinct > k, we need to move forward the substrStart index in order to satisfy the restriction
- `maxLen = max(maxLen, i - substrStart + 1)`

#GOOGL #AppDynamics #Coupang

#Hash Table #String