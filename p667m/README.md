# 667. Beautiful Arrangement II (Medium)

Given two integers `n` and `k`, you need to construct a list which contains n different positive integers ranging from 1 to n and obeys the following requirement:
Suppose this list is `[a1, a2, a3, ... , an]`, then the list `[|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|]` has exactly k distinct integers.

If there are multiple answers, print any of them.

### Example 1:

```
Input: n = 3, k = 1
Output: [1, 2, 3]
Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.
```

### Example 2:

```
Input: n = 3, k = 2
Output: [1, 3, 2]
Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.
```

### Note:

- The n and k are in the range 1 <= k < n <= 10^4.

## Solution

If you have n number, the maximum k can be n - 1;
This can be done by picking numbers interleavingly from head and tail,

```
// start from i = 1, j = n;
// i++, j--, i++, j--, i++, j--

i: 1   2   3   4   5
j:   9   8   7   6
out: 1 9 2 8 3 7 4 6 5
dif:  8 7 6 5 4 3 2 1
```

When k is less than that, simply lay out the rest (i, j) in incremental order(all diff is 1). Say if k is 5:

```
// i++ j-- i++ j--  i++ i++ i++ ...

out: 1 9 2 8 3 4 5 6 7
dif: 8 7 6 5 1 1 1 1
```

#Array

#Similar questions [#526](../p526m/README.md) [#667](../p667m/README.md)