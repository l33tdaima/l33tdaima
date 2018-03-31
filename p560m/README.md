# 560. Subarray Sum Equals K (Medium)

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

### Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

## Solution
### Intuitive Approach
Go through all the subarrays, `a[0], a[0..1], a[0..2], a[0..n-1]; a[1], a[1..n-1]; ... ; a[n-2], a[n-2..n-1]; a[n-1].` n(n+1)/2 possible combinations, each needs a sum computation. O(N^3) complexity.

### Improvement O(N^2)
Sum up from back, so that you can leverage the previous subarray sum for the new subarray adding an new number in the front. So that iterate and sum at the same time improves us to O(N^2).

### Optimal Approach O(N)
If the cumulative sum up to two indices, i and j, is at a difference of k, `sum[i] - sum[j] = k`, the subarray between j + 1 and i counts. 
When we iterate to compute the cumulative sum, we store (sum, # of occurence) in a map, and look up the map if see if we have encounter `sum - k` before, if yes, add the found # of occurences into the final result count.

#GOOGL

#Array #Hash Table
