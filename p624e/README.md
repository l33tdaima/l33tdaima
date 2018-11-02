# 624. Maximum Distance in Arrays (Easy) (Medium)

Given m arrays, and each array is sorted in ascending order. Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a-b|. Your task is to find the maximum distance.

### Example 1:
```
Input: 
[[1,2,3],
 [4,5],
 [1,2,3]]
Output: 4
Explanation: 
One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
```
### Note:
- Each given array will have at least 1 number. There will be at least two non-empty arrays.
- The total number of the integers in all the m arrays will be in the range of [2, 10000].
- The integers in the m arrays will be in the range of [-10000, 10000].

## Solution
This problem is equivalent to find the max difference from a list of pairs where each pair is the min and max of the original array, because the array is sorted.

### Intuitive Approach
The brutal force will be cross-checking the each possible min to max, where they can't be from the same array. O(N^2) of time complexity

### Optimal Approach
We keep track of minVal and maxVal when scaning the list of arrays. For every new array, `a` considered, we find the distance `a[n−1] − minVal` and `maxVal−a[0]` to compete with the maximum distance found so far.

#YHOO

#Array #Greedy
