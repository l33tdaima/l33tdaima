# 522. Longest Uncommon Subsequence II (Medium)

Given an array of strings `strs`, return the length of the _longest uncommon subsequence_ between them. If the longest uncommon subsequence does not exist, return `-1`.

An _uncommon subsequence_ between an array of strings is a string that is a _subsequence of one string but not the others_.

A subsequence of a string `s` is a string that can be obtained after deleting any number of characters from `s`.

For example, `"abc"` is a subsequence of `"aebdc"` because you can delete the underlined characters in `"aebdc"` to get `"abc"`. Other subsequences of `"aebdc"` include `"aebdc"`, `"aeb"`, and `""` (empty string).

### Example 1:

```
Input: strs = ["aba","cdc","eae"]
Output: 3
```

### Example 2:

```
Input: strs = ["aaa","aaa","aa"]
Output: -1
```

### Constraints:

- 1 <= strs.length <= 50
- 1 <= strs[i].length <= 10
- strs[i] consists of lowercase English letters.

#Array #Hash Table #Two Pointers #String #Sorting

#Similar questions [#521](../p521e/README.md) [#522](../p522m/README.md) [#392](../p392e/README.md)
