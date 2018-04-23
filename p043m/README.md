43. Multiply String (Medium)

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

## Solution:
We also provided functional approach, which is significant slower than imperative one.
```
    1 2 3  index i = 1
      4 5  index j = 0
  =======
      1 5
    1 0
  0 5
  --------
    1 2
  0 8      index [1, 2] = [i + j, i + j + 1]
0 4
==========
0 5 5 3 5
```
Scan two number strings, multiply digit by digit, and accumulate the corresponding positions in the result array using index mapping formula above.

#FB #TWTR

#Math #String
