# 557. Reverse Words in a String III (Easy)

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

### Example 1:

```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

### Example 2:

```
Input: s = "God Ding"
Output: "doG gniD"
```

### Constraints:

- `1 <= s.length <= 5 \* 10^4`
- `s` contains printable ASCII characters.
- `s` does not contain any leading or trailing spaces.
- There is at least one word in `s`.
- All the words in `s` are separated by a single space.

## Solution

Reverse word by word which is delimited by space, don't forget the last word which doesn't have space delimiter.

#MSFT #APPL

#String

#Similar questions [#344](../p344e/README.md) [#541](../p541e/README.md) [#557](../p577e/README.md)
