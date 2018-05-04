# 398. Random Pick Index (Medium)

Given an array of integers with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

Note:
The array size can be very large. Solution that uses too much extra space will not pass the judge.

### Example:

int[] nums = new int[] {1,2,3,3,3};
Solution solution = new Solution(nums);

// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
solution.pick(3);

// pick(1) should return 0. Since in the array only nums[0] is equal to 1.
solution.pick(1);

## Solution
### Theory
Reservoir sampling is a family of randomized algorithms for randomly choosing k samples from a list of n items, where n is either a very large or unknown number.

Algorithm R of reservior sampling problem, which creates a "reservoir" array of size k, and populates it with the first k items of S, then for each new sample i after k, randomly replace one old from reservoir by this new sample i, with a decreasing probability of `k/i`, where `k < i < n`, hence any sample in "reservoir" is replaced with probability `1/k * k/i = 1/i`.
```
ReservoirSample(S[1..n], R[1..k])
  // fill the reservoir array
  for i = 1 to k
      R[i] := S[i]

  // replace elements with gradually decreasing probability
  for i = k+1 to n
    j := random(1, i)   // important: inclusive range
    if j <= k
        R[j] := S[i]
```
It can mathematically proved that 
```
    At (i-1) round, P(a number being sampled in k) = k/(i-1).
    At i round, it survives with P(survived) = 1 - P(replaced) = 1 - 1/i = (i-1)/i.
    After i round, P(a number being sampled in k) = k/(i-1) * (i-1)/i = k/i, i grows up to n. 
```

### Approach
For this particular problem, filter out all the sample not equal to target, then it is a reservior sampling problem of picking `k = 1` out of all the duplicate numbers equal to target which has an unknown upper bound n.

Similarly the strategy is during each iteration i, replace the previous picked with probability `k/i = 1/i`, where i is only incrementing when num == target. From the theory above, we know overall probabilty of picking the duplicate is `1/n`, where n is the total number duplicates.

#FB

#Reservoir Sampling
