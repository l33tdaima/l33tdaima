# 216. Combination Sum III (Medium)

Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

### Example 1:
```
Input: k = 3, n = 7

Output: [[1,2,4]]
```
### Example 2:
```
Input: k = 3, n = 9

Output: [[1,2,6], [1,3,5], [2,3,4]]
```
## Solution
### Clarification
Can a number be reused? No

### Algorithm
The raw candidates are from array [1..9], start backtracking process like [#040m](../p040m/README.md) withour worrying about duplicates, terminating recursion if remaing target is negative or length of working path is greater than k.

#Array #Backtracking

#Similar question [#039m](../p039m/README.md) [#040m](../p040m/README.md) [#216m](../p216m/README.md) [#377m](../p377m/README.md)
