# 456. 132 Pattern (Medium)

Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.

Return `true` if there is a **132 pattern** in `nums`, otherwise, return `false`.

### Example 1:

```
Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
```

### Example 2:

```
Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
```

### Example 3:

```
Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
```

### Constraints:

- `n == nums.length`
- `1 <= n <= 10^4`
- `-10^9 <= nums[i] <= 10^9`

## Solution

### O(n^3) Approach

Scan all the possible i, j, k and check the condition

### O(n^2) Approach

Scan j from 0 to n - 2, and keep the min value from nums[0] to nums[j] as nums[i], in each of these i, j pair, see if we can find a k in `(j, n)` such as nums[k] > nums[i] and nums[k] < nums[j]

### O(n) Approach

Scan i from n-1 to 0 and keep push value to a stack. As long as we have seen a number greater than stack top, we use it as num[j] and the value popped from stack as `s3 = num[k]` which is the largest s3 we have so far, and num[j] > num[k] is guaranteed.
In the next iteration, as long as we found a new num[i] is less than s3, we return true.

#Stack
