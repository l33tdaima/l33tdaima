# 496. Next Greater Element I (Easy)

You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

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
### Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.

## Solution
### Intuitive Approach
Use a hashmap to store the value to index mappoing in nums2. Then for each value in nums1, locate the position in O(1), then linearly search for the next greater number. The worst case, all the numbers are decreasing, the complexity becomes O(N1 * N2).

### Optimal Approach
Can we precalculate the next greater number for each value in nums2 in O(N2), so that the overall complexity drops to O(N1 + N2)?
- Use a stack and scan nums2
  - If num < stack.top(), push stack waiting for the next one.
  - While num > stack.top(), pop stack and add this pair to map.
- The rest numbers in the stack should all be mapped to -1 (not found).

#GOOGL
#GOOGL.MJ

#Stack #Hash Table

#Similar questions [#496e](../p496e/README.md) [#503m](../p503m/README.md)
