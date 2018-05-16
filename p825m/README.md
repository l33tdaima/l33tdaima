# 825. Friends Of Appropriate Ages (Medium)

Some people will make friend requests. The list of their ages is given and ages[i] is the age of the ith person. 

Person A will NOT friend request person B (B != A) if any of the following conditions are true:
- age[B] <= 0.5 * age[A] + 7
- age[B] > age[A]
- age[B] > 100 && age[A] < 100 *Redundant*

Otherwise, A will friend request B.

Note that if A requests B, B does not necessarily request A.  Also, people will not friend request themselves.

How many total friend requests are made?

### Example 1:
```
Input: [16,16]
Output: 2
Explanation: 2 people friend request each other.
```
### Example 2:
```
Input: [16,17,18]
Output: 2
Explanation: Friend requests are made 17 -> 16, 18 -> 17.
```
### Example 3:
```
Input: [20,30,100,110,120]
Output: 
Explanation: Friend requests are made 110 -> 100, 120 -> 110, 120 -> 100.
```
### Notes:
- 1 <= ages.length <= 20000.
- 1 <= ages[i] <= 120.

## Solution
### Intuitive Approach
Double loop to iteration each permutation of any two person and apply the check to determine count or not.

### Optimal Apporach O(N)
The actual condition is, A person with age A can friend request person with age B if
```
B is in range ( 0.5 * A + 7, A] where A >= 15
```
Because for those younger and equal to 14, they can't friend request to those >= 15, neither <= 14, (0.5 * 14) + 7 = 14. Those ages have no contribution at all.

- Count the people for each age in an array of 121 years [1..120], ageCount[1..120]
- From age a 15 to 120,
  - Loop age b from (0.5 * a + 7 + 1) to a - 1, contribute ageCount[b] * ageCount[a]
  - The contribution for the same age is permutation formula ageCount[a] * (ageCount[a] - 1)

The loop `(0.5 * A + 7, A]` is upper bounded by (67, 120], doesn't make the complexity to O(N^2). We can slightly improve to precalculate the accumulative sum, then use `sum[a] - sum[~~(0.5 * a + 7))]` to replace inner loop.

#FB

#Array #Math