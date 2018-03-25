# 161. One Edit Distance (Medium)

Given two strings S and T, determine if they are both one edit distance apart.

## Solution

### Clarification
We need clarify what edit means, could be change, insert, or delete, while chars in strings must keep the same order.

We also need to clarify if we need exactly one edit or at most one edit. Exact one edit in this case.

### Algorithm
- Reject the case length difference > 1;
- Swap the S and T, making sure S.length >= T.length so that we only need to worry about delete one from S, no insert case
- Scan S and T simultaneously, set flag if found one diff, forward one extra (delete) if S.length > T.length

#FB(Sample) #Uber #TWTR #SNAP

#String
