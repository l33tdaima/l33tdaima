801. Minimum Swaps To Make Sequences Increasing (Medium)

We have two integer sequences A and B of the same non-zero length.

We are allowed to swap elements A[i] and B[i].  Note that both elements are in the same index position in their respective sequences.

At the end of some number of swaps, A and B are both strictly increasing.  (A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)

Given A and B, return the minimum number of swaps to make both sequences strictly increasing.  It is guaranteed that the given input always makes it possible.

### Example:
```
Input: A = [1,3,5,4], B = [1,2,3,7]
Output: 1
Explanation: 
Swap A[3] and B[3].  Then the sequences are:
A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
which are both strictly increasing.
```
### Note:
- A, B are arrays with the same length, and that length will be in the range [1, 1000].
- A[i], B[i] are integer values in the range [0, 2000].

## Solution
### Intuitive Approach
Similar to 0-1 knapsack problem, each position can either swap or no swap, literally O(2^N) search space.
Hence we do backtracking position by position.

### DP Approach
Apparently we have a lot duplicate check and unnecessary swap operations in backtracking approach which can be eliminated.

We need two sets DP state variables for each position, use `swap[i]` and `keep[i]` denote the min swaps to make A[0] to A[i] and B[0] to B[i] strictly increasing with and without swaping A[i] and B[i].

- If (A[i-1] < A[i] && B[i-1] < B[i]) 
  - keep[i] = keep[i-1], no swap needed
  - swap[i] = swap[i-1] + 1, swap both i and i-1
- If (A[i-1] < B[i] && B[i-1] < A[i]) 
  - keep[i] = min(keep[i], swap[i-1]), swap i-1, but not i
  - swap[i] = min(swap[i], keep[i-1] + 1), swap i, but not i-1

For example, 
```
A: ..., 2, 3 
B: ..., 1, 4
Both if cases will be hit,
2, 3 | 1, 4 | 1, 3 | 2, 4
1, 4 | 2, 3 | 2, 4 | 1, 3
```
#FB

#Backtracking #Dynamic Programming