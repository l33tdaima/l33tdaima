# 264. Ugly Number II (Medium)

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

### Example:
```
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
```

### Note:  
1. 1 is typically treated as an ugly number.
2. n does not exceed 1690.

## Solution
### Intuitive Approach
Test every number which isUgly(k) is true and count until reaching to n. For those are not ugly, a lot of waste computing.

### Dynamic Programming
We use existing ugly numbers to find the next ugly number, which has to be the the smallest number among all the existing numbers multiplied by 2, 3, 5 that isn't in the list already. The list of all the existing numbers will grow large, we only need to keep track of the pointers of three lists and use the values pointed to compute the next ugly number.

#Math #Dynamic Programming #Heap

#Similar questions [#263](../p236e/README.md) [#264](../p264m/README.md)
