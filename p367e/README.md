# 367. Valid Perfect Square (Easy)

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

### Example 1:
```
Input: 16
Returns: True
```

### Example 2:
```
Input: 14
Returns: False
```

## Newton Solution
To find root of the given equation `f(x) = x^2 - num = 0`, the iteration is
```
x_(n + 1) = x - f(x)/f'(x)
          = x - (x*x - num) / 2 * x
          = x - x/2 + num / 2 * x
          = (x + num /x ) / 2

```

#LNKD

#Math
