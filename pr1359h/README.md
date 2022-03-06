# 1359. Count All Valid Pickup and Delivery Options (Hard)

Given `n` orders, each order consist in pickup and delivery services.

Count all valid pickup/delivery possible sequences such that `delivery(i)` is always after of `pickup(i)`.

Since the answer may be too large, return it modulo `10^9 + 7`.

### Example 1:

```
Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
```

### Example 2:

```
Input: n = 2
Output: 6
Explanation: All possible orders:
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.
```

### Example 3:

```
Input: n = 3
Output: 90
```

### Constraints:

- `1 <= n <= 500`

## Solution

How to insert the `n`th pair when we have `n - 1` pairs?

- To insert the first element, there are `n * 2 - 1` chioces of position。
- To insert the second element, there are `n * 2` chioces of position。
- So there are `(n * 2 - 1) * n * 2` permutations.
- Considering that delivery(i) is always after of pickup(i), we need to divide 2.

#Math #Dynamic Programming #Combinatorics
