# 354. Russian Doll Envelopes (Hard)

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.

### Example 1:

```
Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
```

### Example 2:

```
Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1
```

### Constraints:

- 1 <= envelopes.length <= 5000
- envelopes[i].length == 2
- 1 <= wi, hi <= 10^4

## Solution

- Sort the array. Ascend on width and descend on height if width are same.
  - Since the width is increasing, we only need to consider height.
  - [3, 4] cannot contains [3, 3], so we need to put [3, 4] before [3, 3] when sorting otherwise it will be counted as an increasing number if the order is [3, 3], [3, 4]
- Find the longest increasing subsequence based on height.

#Binary Search #Dynamic Programming

#Similar questions [#300](../p300m/README.md) [#354](../p354h/README.md)
