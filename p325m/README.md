# 325. Maximum Size Subarray Sum Equals k

Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

### Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

### Example 1:
Given nums = [1, -1, 5, -2, 3], k = 3,
return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

### Example 2:
Given nums = [-2, -1, 2, 1], k = 1,
return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

Follow Up:
Can you do it in O(n) time?

## Solution
### Intuitive Approach
The brutal force O(N^2) approach is to scan the nums subarray with length n, 0..(n-1), 1..(n-1), 2..(n-1), then length n-1, ..., to see if accumulated sum matches k.

### Optimal Approach O(N)
Let denote the sum from 0 to i by s[i], and cache them in cache by (sum, index) pair. Since the sum of subarray j+1 to i is s[i]-s[j], by the time we loop to index j we can check against s[i], and s[j]-k in the cache in const time to avoid looping from 0 to i.

Note that the sum as key might have duplicates, we only cache the first time for a smaller index to hit a larger length. 

#FB #Palantir

#Hash Table
