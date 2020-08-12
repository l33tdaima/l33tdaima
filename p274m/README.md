# 274. H-Index

Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

### Example:
```
Input: citations = [3,0,6,1,5]
Output: 3 
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had 
             received 3, 0, 6, 1, 5 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, his h-index is 3.
```
Note: If there are several possible values for h, the maximum one is taken as the h-index.

## Solution
h-index ranges from 0 to N. High index indicates a good researcher, h-index 0 indicates a terrible/unknown researcher.

### Approach using Comparison Sort O(NlogN)
- Sort the citations low to high, like 
```
[0,1,3,5,6]
```
- Try `hIndex` from N to 1
  - If `hIndex` indeed is the current value, then sorted[N - hIndex] >= hIndex, return.
  - Continue if above is not true.
- After loop is completed, `hIndex` must be 0, the citations are all zeroes.

### Approach using Counting Sort O(N)
To improve performance of comparison based sort, we think of counting sort which has limitation that values should not dramatically greater than size N. Since h-index is upper bound to N, all the citations greater than N are counted into N.
- Count each citation value's occurence as we do in counting sort, citation values ranges from 0 to N.

- Iterate from right to left, cv = N .. 0, accumulate a sum at each value, which tells us how many papers have citations greater than cv

For example: citations = [1,3,2,3,100]
citations | 0 | 1 | 2 | 3 | 4 | 5
--- | --- | --- | --- | --- | --- | ---
count | 0 | 1 | 1 | 2 | 0 | 1
sum | 5 | 5 | 4 | 3 | 1 | 1

- From right to left, sum is increasing while citation amount is decreasing. When they cross, we have h-index found when sum >= cv.

#GOOGL #FB #BBG

#Hash Table #Sort

#Similar questions [#274m](../p274m/README.md) [#275m](../p275m/README.md)
