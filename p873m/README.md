# 873. Length of Longest Fibonacci Subsequence (Medium)

A sequence `X_1, X_2, ..., X_n` is fibonacci-like if:

- `n >= 3`
- `X_i + X_{i+1} = X_{i+2} for all i + 2 <= n`

Given a strictly increasing array A of positive integers forming a sequence, find the length of the longest fibonacci-like subsequence of A.  If one does not exist, return 0.

(Recall that a subsequence is derived from another sequence A by deleting any number of elements (including none) from A, without changing the order of the remaining elements.  For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].)

### Example 1:
```
Input: [1,2,3,4,5,6,7,8]
Output: 5
Explanation:
The longest subsequence that is fibonacci-like: [1,2,3,5,8].
```

### Example 2:
```
Input: [1,3,7,11,12,14,18]
Output: 3
Explanation:
The longest subsequence that is fibonacci-like:
[1,11,12], [3,11,14] or [7,11,18].
```

### Note:
- 3 <= A.length <= 1000
- 1 <= A[0] < A[1] < ... < A[A.length - 1] <= 10^9
- (The time limit has been reduced by 50% for submissions in Java, C, and C++.)

## Solution
### Intuitive Approach
- Store numbers into a set for looking up existence.
- For each pair of starting numbers, use a Fibonacci iteration to search for the longest subsequence size

Time complexity of O(N^2 log M), M is the max value of A, space complexity of O(N)

### Dynamic Programming
Think of two consecutive terms A[i], A[j] in a fibonacci-like subsequence as a single node (i, j), and the entire subsequence is a path between these consecutive nodes. For example, with the fibonacci-like subsequence (A[1] = 2, A[2] = 3, A[4] = 5, A[7] = 8, A[10] = 13), we have the path between nodes (1, 2) <-> (2, 4) <-> (4, 7) <-> (7, 10).

The motivation for this is that two nodes (i, j) and (j, k) are connected if and only if `A[i] + A[j] == A[k]`, and we needed this amount of information to know about this connection. Now we have a problem similar to Longest Increasing Subsequence.

- Let longest(i, j) be the longest path ending in indices (i, j). 
- longest[j, k] = longest[i, j] + 1 if (i, j) and (j, k) are connected. 

Time Complexity: O (N^2)

#WMT

#Array #Dynamic Programming

#Similar questions [#509](../p509e/README.md) [#842](../p842m/README.md) [#873](../p873m/README.md) [#300m](../p300m/README.md)
