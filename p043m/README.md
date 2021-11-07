43. Multiply String (Medium)

Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

### Example 1:

```
Input: num1 = "2", num2 = "3"
Output: "6"
```

### Example 2:

```
Input: num1 = "123", num2 = "456"
Output: "56088"
```

### Constraints:

- `1 <= num1.length, num2.length <= 200`
- `num1` and `num2` consist of digits only.
- Both `num1` and `num2` do not contain any leading zero, except the number `0` itself.

## Solution:

- We know the length of result won't exceed the sum of two numbers' lengths `M + N`.
- We have M \* N productions to fill in and contribute to each digit of the result.
- From the example below, the two-digit production from `nums[i] * nums[j]` will contribute to result digit `[i+j]` and `[i+j+1]` respectively.

```
      1 2 3
      0 4 5
    =======
        1 5
      1 0
    0 5
    -------
      1 2
    0 8
  0 4
===========
0 0 5 5 3 5
```

#FB #MSFT #GOOGL

#Math #String
