# 507. Perfect Number (Easy)

We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

### Example:
```
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
```

Note: The input number n will not exceed 100,000,000. (1e8)

## Solution
Necessary optimization, time complexity of `O(sqrt(N))`
- Iterating up to sqrt of num
- When found a factor, add both to the checking sum

#Fallible

#Math
