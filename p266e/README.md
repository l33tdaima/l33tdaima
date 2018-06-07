# 266. Palindrome Permutation (Easy)

Given a string, determine if a permutation of the string could form a palindrome.

### Example 1:
```
Input: "code"
Output: false
```

### Example 2:
```
Input: "aab"
Output: true
```

### Example 3:
```
Input: "carerac"
Output: true
```

## Solution
### Clarification
What are the letters in the string? Any

### Intuitive Approach
For n letters, there is n!0! ways and check each possibility.

### Optimal Approach
To know if a string can form a palindrome, we just need to count to have one letter with odd occurence and the rest with even occurence.

Even better we can just use bitset, flip it when seeing a letter. Then check the count afterward.

#GOOGL #BBG #UBER

#Hash Table