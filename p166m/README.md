# 166. Fraction to Recurring Decimal (Medium)

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

### Example 1:
```
Input: numerator = 1, denominator = 2
Output: "0.5"
```
### Example 2:
```
Input: numerator = 2, denominator = 1
Output: "2"
```
### Example 3:
```
Input: numerator = 2, denominator = 3
Output: "0.(6)"
```

## Solution
The first challenge is how to implement fraction division for the decimal part. Each digit of decimal part is the quotient of `remainder * 10`, remainder is updated by performing mod op repeatly.

The second challenge is how to detect the repeating pattern which can be done by using a hashtable to remember the position where a remainder has been met last time.

### Why
Let quotient be `q` and remainder be `r` in `n / d = (q, r)`, which means `n = q * d + r`.

Corner case of no decimal part: `q` is the integral part, if `r == 0`, done. The genral case is `n < d, q == 0`. 

For the general case, the deciaml part is contained in `r`. How do we extract them digit by digit? If we raise the whole euqation by 10, `10n = 10q * d + 10r`, we move decimal point right by one digit, the digit originally after decimal point becomes an intgral part which can be extracted by integral division. Hence we just need to repeat this multiply by 10 process until `r == 0`.

#GOOGL #IXL

#Hash Table #Math
