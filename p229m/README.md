# 229. Majority Element II (Medium)

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. 

*Note*: The algorithm should run in linear time and in O(1) space.

### Example 1:
```
Input: [3,2,3]
Output: [3]
```

### Example 2:
```
Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
```

## Solution
Boyer-Moore Voting Algorithm is used to solve the problem of find the the candidates with more than half votes from arbitrary candidates. For the first round of eliminating, compare the votes pair, cancel out if they are different, add the votes for the candidate if they are the same, and compare with the next, and so on, until finding a possible candidate. For the second counting round, count his actual votes to see if he is really the winner.

This problem is the variant of this algorithm. There will be no more than 2 elements in the outcome. A variant of Boyer-Moore Algorithm which we must check candidate 1 (m1) and candidate 2 (m2) first, not zero first as we did in p169e, otherwise we could have m1 and m2 the same in some test cases.

#Array
