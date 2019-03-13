# 686. Repeated String Match (Easy)

Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

### Note:
The length of A and B will be between 1 and 10000.

## Solution
### Intuitive Approach
Keep concatenating A and check if it contains B. O(N*(M+N))

### Optimal Approach
KMP O(N+M).

#GOOGL

#Two Pointer

#Similar questions [#028](../p028e/README.md) [#459](../p459e/README.md) [#686](../p686e/README.md)
