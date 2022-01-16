# 849. Maximize Distance to Closest Person (Medium)

You are given an array representing a row of `seats` where `seats[i] = 1` represents a person sitting in the `i`th seat, and `seats[i] = 0` represents that the `i`th seat is empty **(0-indexed)**.

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.

Return that maximum distance to the closest person.

### Example 1:

```
Input: [1,0,0,0,1,0,1]
Output: 2
Explanation:
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
```

### Example 2:

```
Input: [1,0,0,0]
Output: 3
Explanation:
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
```

### Example 3:

```
Input: seats = [0,1]
Output: 1
```

### Constraints:

- `2 <= seats.length <= 2 \* 10^4`
- `seats[i]` is `0` or `1`.
- At least one seat is empty.
- At least one seat is occupied.

## Solution

### Intuitive Approach

For every spot with zero, search left and right to probe the width to calculate the distance to closest person, then look for the maximum value for the entire array. Roughly O(N^2) complexity.

### Two Passes Approach

1. Use an array `dist`, the same length to `seats`, storing the distance to closest for each position, those with ones will not be used.
2. Scan left to right to compute the max distance to the left of each zero, if there is an one to its left, store them.
3. Scan right to left to compute the max distance to the right of each zero, and then find the lesser with the value from the first pass.
4. Compute the max during the second pass.

O(2N) time, and O(N) space.

### One Pass Approach

We just need to find the width of each segment of zeroes, the max distance for each segment is

1. `r` for leftmost open end;
2. `(r - l)/2`
3. `N - l` for rightmost open end;

O(N) time, and O(1) space.

#GOOGL

#Array
