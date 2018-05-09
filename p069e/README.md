# 69. Sqrt(x) (Easy)

Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

### Example 1:
```
Input: 4
Output: 2
```
### Example 2:
```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we want to return an integer, the decimal part will be truncated.
```

## Solution
I believe the question is meant to test Newton's iterative methods.
To solve the root of equation `f(x) = x^2 - s = 0`, one will start from the initial guess, iterates using the formula `x1 = x0 - f(x0)/f'(x0)`, then `x1 = x0 - (x0^2 - s)/(2*x0) = 1/2 * (x0 + s/x0)`.

#FB #BBG #APPL

#Math
