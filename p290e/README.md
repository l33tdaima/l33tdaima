# 290. Word Pattern (Easy)

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `s`.

### Example 1:

```
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
```

### Example 2:

```
Input:pattern = "abba", s = "dog cat cat fish"
Output: false
```

### Example 3:

```
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```

### Notes:

You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

### Constraints:

- `1 <= pattern.length <= 300`
- `pattern` contains only lower-case English letters.
- `1 <= s.length <= 3000`
- `s` contains only lowercase English letters and spaces `' '`.
- `s` _does not contain_ any leading or trailing spaces.
- All the words in `s` are separated by a _single space_.

## Solution

Both directions of mapping need to be stored.

#UBER #DBX

#Hash Table

#Similar questions [#p290e](../p290e/README.md) [#291h](../291h/README.md)
