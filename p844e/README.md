# 844. Backspace String Compare (Easy) (Medium)

Given two strings `s` and `t`, return true if they are equal when both are typed into empty text editors. `'#'` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

### Example 1:

```
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
```

### Example 2:

```
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
```

### Example 3:

```
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
```

### Note:

- `1 <= s.length, t.length <= 200`
- `s` and `t` only contain lowercase letters and `'#'` characters.

### Follow up:

Can you solve it in O(N) time and O(1) space?

## Solution

Use a stack to simulate each `s` and `t` by pushing an alphabet and popping a #, then compare the resulting strings. O(N) of time and O(N) of space.

To achieve O(1) space without maintaining a stack, it is impossible to iterate forward without changing the input string because you don't know if a char will be deleted by the following '#', the idea will be iterate backward, when seeing a '#' we know it will skip a valid char before it.

#GOOGL #FB

#Stack #Two Pointers
