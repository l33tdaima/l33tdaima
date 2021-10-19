# 496. Next Greater Element I (Easy)

The next greater element of some element `x` in an array is the first greater element that is to the right of `x` in the same array.

You are given two _distinct 0-indexed_ integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`.

For each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine the _next greater element_ of `nums2[j]` in `nums2`. If there is no next greater element, then the answer for this query is `-1`.

Return an array `ans` of length `nums1.length` such that `ans[i]` is the next greater element as described above.

### Example 1:

```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
```

### Example 2:

```
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
```

### Constraints:

- `1 <= nums1.length <= nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 10^4`
- All integers in `nums1` and `nums2` are unique.
- All the integers of `nums1` also appear in `nums2`.

**Follow up:** Could you find an O(nums1.length + nums2.length) solution?

## Solution

### Intuitive Approach

Use a hashmap to store the value to index mapping in nums2. Then for each value in nums1, locate the position in O(1), then linearly search for the next greater number. The worst case, all the numbers are decreasing, the complexity becomes O(N1 \* N2).

### Optimal Approach

Can we precalculate the next greater number for each value in nums2 in O(N2), so that the overall complexity drops to O(N1 + N2)?

- Use a stack and scan nums2
  - While num > stack.top(), pop stack and add this pair to map.
- The rest numbers in the stack should all be mapped to -1 (not found).

#GOOGL
#GOOGL.MJ

#Stack #Hash Table #Stack #Monotonic Stack

### Similar questions

[#496](../p496e/README.md) [#503](../p503m/README.md) [#556](../p556m/README.md)
