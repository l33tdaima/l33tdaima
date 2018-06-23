# 162. Find Peak Element (Medium)

A peak element is an element that is greater than its neighbors. Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to ANY ONE OF THE PEAKS is fine. You may imagine that num[-1] = num[n] = -∞.

For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

Note:
Your solution should be in logarithmic complexity.

## Solution
Solution code looks simple but it needs to be explained well. The invariant to maintain here is for any valid left bound and right bound `l < r, num[l-1] < num[l] && num[r] > num[r+1], where num[-1] = num[n] = -∞` initially.
1. Find a mid point (l+r)/2, check num[m] and num[m+1], as m is always leaning against left by flooring calcuation.
2. If num[m] < num[m+1], the left portion of invariant is satisfied, hence we must go right, l = m+1.
3. If num[m] > num[m+1], the right portion of invariant is satisfied, hence we must go right, r = m.
4. Eventually we will get to the scenario where l and r are next to each other, m = l;
    * if num[m] = num[l] < num[m+1] = num[r], the next l = m + 1 = r, then loop exits.
    * if num[m] = num[l] > num[m+1] = num[r], the next r = m, l still = m, then loop exits.
5. For both case, after loop exits, the answer is always l. Done!

#GOOGL #MSFT
#GOOGL.MJ

#Array #Binary Search
