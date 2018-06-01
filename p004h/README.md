# 4. Median of Two Sorted Arrays (Hard)

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

### Example 1:
```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```
### Example 2:
```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

## Solution
### Definition
The median is used for dividing a set into two equal length subsets, that one subset is always greater than the other.

### Idea
We are looking for the cuts in nums1/A and nums2/B, denoted by `i = [0..m]` and `j = [0..n]`, assume m <= n, which cuts
```
A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]
``` 

1. len(left_part) == len(right_part), 
   ```
   i + j = m - i + n - j or m - i + n - j + 1
   ```
2. max(left_part) <= min(right_part)
   ```
   B[j-1] <= A[i] && A[i-1] <= B[j]
   ```

Binary searching i in [0, m], to find `i` such that:
    (j == 0 or i == m or B[j-1] <= A[i]) and
    (i == 0 or j == n or A[i-1] <= B[j])
    where j = (m + n + 1)/2 - i

#GOOGL #MSFT #APPL #ADBE #TwoSigma

#Array #Binary Search #Divide and Conquer
