# 205. Isomorphic Strings (Easy)

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

### Example 1:

```
Input: s = "egg", t = "add"
Output: true
```

### Example 2:

```
Input: s = "foo", t = "bar"
Output: false
```

### Example 3:

```
Input: s = "paper", t = "title"
Output: true
```

### Constraints:

- 1 <= s.length <= 5 \* 10^4
- t.length == s.length
- s and t consist of any valid ascii character.

## Solution

The restriction here is s and t are 1-1 mapping, can't be M-1 or 1-M mapping. Instead of storing the char, we can just store the index last seen for both s->t map and t->s map which should be identical, including initial value -1.

#LNKD #GOOGL

#GOOGL.MJ

#Hash Table
