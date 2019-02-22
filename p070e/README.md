# 70. Climbing Stairs (Easy)

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.


### Example 1:
```
Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
```
### Example 2:
```
Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## Solution
```
f(n) = f(n-1) + f(n-2)

```

#APPL #ADBE #AMZN

#Dynamic Programming

#Similar questions [#70](../p070e/README.md) [#509](../p509e/README.md) [#746](../p746e/README.md)