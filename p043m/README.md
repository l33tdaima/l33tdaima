43. Multiply String (Medium)

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

Solution:
    3 2
    4 5
--------
  1 6 0
1 2 8
========
1 4 4 0

What we provided here is functional approach, which is significant slower than imperative one, but code is clean and modualized. Two vanilla for loop will run faster.
