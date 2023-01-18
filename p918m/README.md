# 918. Maximum Sum Circular Subarray (Medium)

Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray of `nums`.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A subarray may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1, k2 <= j` with `k1 % n == k2 % n`.

### Example 1:

```
Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3
```

### Example 2:

```
Input: [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10
```

### Example 3:

```
Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.
```

### Example 4:

```
Input: [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3
```

### Example 5:

```
Input: [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1
```

### Constraints:

- `n == nums.length`
- `1 <= n <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`

## Solution

This is twisted version of [#53](../p053e/README.md). There are two cases.

- The first is that the subarray take only a middle part, and we know how to find the max subarray sum.
- The second is that the subarray take a part of head array and a part of tail array. We can transfer this case to the first one. The maximum result equals to the total sum minus the minimum subarray sum.

### Corner case

If all numbers are negative, maxSum = max(A) and minSum = sum(A). In this case, max(maxSum, total - minSum) = 0, which means the sum of an empty subarray, but we need to return the max(A), instead of sum of am empty subarray.

#Array #Divide and Conquer #Dynamic Programming #Monotonic Queue

#Similar Questions [#53](../p053e/README.md) [#152](../p152m/README.md) [#918](../p918m/README.md)
