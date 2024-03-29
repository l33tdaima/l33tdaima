# 718. Maximum Length of Repeated Subarray (Medium)

Given two integer arrays `nums1` and `nums2`, return the maximum length of a subarray that appears in both arrays.

### Example 1:

```
Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].
```

### Example 2:

```
Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5
```

### Constraints:

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 100`

## Solution

Since a common subarray of A and B must start at some `A[i]` and `B[j]`, let `dp[i][j]` be the longest common prefix of `A[i:]` and `B[j:]`. Whenever `A[i] == B[j]`, we know `dp[i][j] = dp[i+1][j+1] + 1`. Also, the answer is `max(dp[i][j]) over all i, j`.

#Array #Binary Search #Dynamic Programming #Sliding Windows #Rolling Hash #Hash Function
