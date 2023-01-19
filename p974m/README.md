# 974. Subarray Sums Divisible by K (Medium)

Given an integer array `nums` and an integer `k`, return the number of non-empty subarrays that have a sum divisible by `k`.

A subarray is a contiguous part of an array.

### Example 1:

```
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
```

### Example 2:

```
Input: nums = [5], k = 9
Output: 0
```

### Constraints:

- `1 <= nums.length <= 3 \* 10^4`
- `-10^4 <= nums[i] <= 10^4`

## Solution

Subarray sum `i + 1` to `j` is `psum[j] - psum[i]`, to be divisible by `k` then

```
psum[j] - psum[i] = n * k
psum[j] % k - psum[i] % k = n * k % k = 0
psum[j] % k = psum[i] % k
```

So we are looking for the count of the same remainders

#Array #Hash Table #Prefix Sum

#Similar questions [#974](../p974m/README.md) [#1010](../pr1010m/README.md)
