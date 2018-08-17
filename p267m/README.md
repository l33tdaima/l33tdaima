# 267. Palindrome Permutation II (Medium)

Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

### Example 1:
```
Input: "aabb"
Output: ["abba", "baab"]
```

### Example 2:
```
Input: "abc"
Output: []
```

## Solution
- Leverage [p266e](../p266e/README.md) to count occurence of each character, return if more than 1 odds
- Produce an array of characters (sorted) by half of the occurence for permutation generation
- Use next_permutation to do the job or implement by ourself [p031m](../p031m/README.md) or [p047m](../p047m/README.md)
  - For each permutation complement the second half for the full string.

#UBER

#Backtracking

#Similar Questions [p266e](../p266e/README.md) [p267m](../p267m/README.me) [p031m](../p031m/README.md) [p047m](../p047m/README.md)
