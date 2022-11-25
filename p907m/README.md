# 907. Sum of Subarray Minimums (Medium)

Given an array of integers `arr`, find the sum of `min(b)`, where `b` ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer modulo `10^9 + 7`.

## Example 1:

```
Input: arr = [3,1,2,4]
Output: 17
Explanation:
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
```

### Example 2:

```
Input: arr = [11,81,94,43,3]
Output: 444
```

## Solution

https://leetcode.com/problems/sum-of-subarray-minimums/discuss/257811/Python-O(n)-slightly-easier-to-grasp-solution-(explained)

### Constraints:

- `1 <= arr.length <= 3 * 10^4`
- `1 <= arr[i] <= 3 * 10^4`

#Array #Dynamic Programming #Stack #Monotonic Stack
