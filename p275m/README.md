# 275. H-Index II (Medium)

Given an array of citations in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

### Example:
```
Input: citations = [0,1,3,5,6]
Output: 3 
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had 
             received 0, 1, 3, 5, 6 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, his h-index is 3.
```
Note: If there are several possible values for h, the maximum one is taken as the h-index.

## Solution
h-Index ranges from 0 to N. High index up to N indicates a good researcher, h-Index = 0 indicates a terrible/unknown researcher.
- Binary search target `h-Index` from N to 0, lo = 0, hi = N.
  - Note that we are not searching for index of citation array
  - If mid point satisfies citations[N - mid] >= mid, meaning if mid is our h-Index, per definition there must be `N-mid` papers less than mid, we just need to check the value on citations[N - mid], >= mid is too big, keep looking for a better hIndex candidate on the right;
  - Otherwise hi = mid - 1, hIndex is smaller

#FB

#Binary Search

#Similar questions [#274m](../p274m/README.md) [#275m](../p275m/README.md)
