# 523. Continuous Subarray Sum (Medium)

Given an integer array `nums` and an integer `k`, return `true` if `nums` has a continuous subarray of size **at least two** whose elements sum up to a multiple of `k`, or `false` otherwise.

An integer `x` is a multiple of `k` if there exists an integer `n` such that `x = n * k`. `0` is always a multiple of `k`.

### Example 1:

```
Input: [23,2,4,6,7],  k = 6
Output: True
Explanation: Because [2,4] is a continuous subarray of size 2 and sums up to 6.
```

### Example 2:

```
Input: [23,2,6,4,7],  k = 6
Output: True
Explanation: Because [23,2,6,4,7] is an continuous subarray of size 5 and sums up to 42.
```

### Example 3:

```
Input: nums = [23,2,6,4,7], k = 13
Output: false
```

### Constraints:

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= sum(nums[i]) <= 2^31 - 1`
- `1 <= k <= 2^31 - 1`

## Solution

### Intuitive Approach

Iterate each possible subarray, `a[0], a[0..1], a[0..2], a[0..n-1]; a[1], a[1..n-1]; ... ; a[n-2], a[n-2..n-1]; a[n-1].` (O(N^2)), check their sum if the `sum % k == 0`.

### Optimal Approach O(N)

Like we did in [#560](../p560m/README.md), scan to compute the cumulative sum, and check if we have seen (sum - k) before. This variant is to look up sum[j] in the past such that `sum[i] - sum[j] = m*k`.

Now we need a remainder theorem, for a given positive number x, (x + m\*k) mod k = x mod k, which m is an integer multiplier, includeing 0 obvious. Hence we just need to store the mod k of each cumulative sum into map, and check there is a duplicate.

For example, [23,2,6,4,7], k = 6, the cumulative sum is [23,25,31,35,42] and the remainders of 6 are [5,1,1,5,0]. We got remainder 5 at index 0 and at index 3. That means, in between these two indexes we must have added a number which is multiple of the k.

#FB

#Math #Hash Table

#Similar question [#560](../p560m/README.md),
