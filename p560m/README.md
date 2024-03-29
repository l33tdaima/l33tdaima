# 560. Subarray Sum Equals K (Medium)

Given an array of integers `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.

### Example 1:

```
Input:nums = [1,1,1], k = 2
Output: 2
```

### Example 2:

```
Input: nums = [1,2,3], k = 3
Output: 2
```

### Constraints:

- `1 <= nums.length <= 2 * 10^4`
- `-1000 <= nums[i] <= 1000`
- `-10^7 <= k <= 10^7`

## Solution

### Intuitive Approach

Go through all the subarrays, `a[0], a[0..1], a[0..2], a[0..n-1]; a[1], a[1..n-1]; ... ; a[n-2], a[n-2..n-1]; a[n-1].` n(n+1)/2 possible combinations, each needs a sum computation. O(N^2) complexity.

### Optimal Approach O(N)

If the cumulative sum up to two indices, i and j, is at a difference of k, `sum[i] - sum[j] = k`, the subarray between j + 1 and i counts.
When we iterate to compute the cumulative sum, we store (sum, # of occurence) in a map, and look up the map if see if we have encounter `sum - k` before, if yes, add the found # of occurences into the final result count.

#GOOGL

#Array #Hash Table

#Similar question [#523](../p523m/README.md),

#Explore Facebook
