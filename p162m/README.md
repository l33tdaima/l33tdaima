# 162. Find Peak Element (Medium)

A peak element is an element that is strictly greater than its neighbors.

Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

You must write an algorithm that runs in O(log n) time.

### Example 1:

```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```

### Example 2:

```
Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5
Explanation: Your function can return either index number 1 where the peak element is 2,
             or index number 5 where the peak element is 6.
```

### Constraints:

- 1 <= nums.length <= 1000
- -2^31 <= nums[i] <= 2^31 - 1
- nums[i] != nums[i + 1] for all valid i.

## Solution

Solution code looks simple but it needs to be explained well. The invariant to maintain here is for any valid left bound and right bound `l < r, num[l-1] < num[l] && num[r] > num[r+1], where num[-1] = num[n] = -∞` initially.

1. Find a mid point (l+r)/2, check num[m] and num[m+1], as m is always leaning against left by flooring calcuation.
2. If num[m] < num[m+1], the left portion of invariant is satisfied, hence we must go right, l = m+1.
3. If num[m] > num[m+1], the right portion of invariant is satisfied, hence we must go right, r = m.
4. Eventually we will get to the scenario where l and r are next to each other, m = l;
   - if num[m] = num[l] < num[m+1] = num[r], the next l = m + 1 = r, then loop exits.
   - if num[m] = num[l] > num[m+1] = num[r], the next r = m, l still = m, then loop exits.
5. For both case, after loop exits, the answer is always l. Done!

#GOOGL #MSFT
#GOOGL.MJ

#Array #Binary Search

#Explore Facebook
