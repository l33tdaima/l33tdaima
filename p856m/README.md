# 856. Score of Parentheses (Medium)

Given a balanced parentheses string `s`, return the **score** of the string.

The **score** of a balanced parentheses string is based on the following rule:

- `"()"` has score `1`
- `AB` has score `A + B`, where `A` and `B` are balanced parentheses strings.
- `(A)` has score `2 \* A`, where `A` is a balanced parentheses string.

### Example 1:

```
Input: s = "()"
Output: 1
```

### Example 2:

```
Input: s = "(())"
Output: 2
```

### Example 3:

```
Input: s = "()()"
Output: 2
```

### Example 4:

```
Input: "(()(()))"
Output: 6
```

### Constraints:

- `2 <= s.length <= 50`
- `s` consists of only `'('` and `')'`.
- `s` is a balanced parentheses string.

## Solution

All we have to do is to calculate the root node value via post-order traverse.
`(()(()()))` can be treated as the tree below.

```
                            (10)            layer 0
                            ／ \
                          (1)  (4)          layer 1
                               /  \
                             (1)  (1)       layer 2
```

The value of the root node is the sum of each leaf node value to the power of it's depth. `2^1 + 2^2 + 2^2 = 10`
