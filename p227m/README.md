# 227. Basic Calculator II (Medium)

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, \*, / operators and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid.

### Example 1:

```
Input: "3+2*2"
Output: 7
```

### Example 2:

```
Input: " 3/2 "
Output: 1
```

### Example 3:

```
Input: " 3+5 / 2 "
Output: 5
```

### Note:

- You may assume that the given expression is always valid.
- Do not use the eval built-in library function.

## Solution

- Scan the string
  - Accumulate operand digit by digit
  - Take different operation based on the _previous_ operator
    - \* and / need pop stack and push the result
    - \+ and - need push the signed operand
- Sum the resulting stack

#String

#Airbnb
