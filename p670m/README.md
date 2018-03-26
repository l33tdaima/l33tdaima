# 670. Maximum Swap (Medium)

Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.

Example 2:
Input: 9973
Output: 9973
Explanation: No swap.

Note:
The given number is in the range [0, 10^8]

## Solution
Intuitively we want to find the largest digit and swap it to the MSB, if MSB already largest, then the next position. How do we do that?
1. Covert the number to an array of digits.
2. Scan it forward and add the index of each digit to hash table of digit to the last occurence index mapping (Array of size 10).
3. Scan the array again, for each digit, if we can find a largest digit in the hash table from 9 to 0 behind it, we can swap them and return.
4. Convert the array after swapping to number as the answer.

O(4*N): loop once to convert numbers to array, loop twice to create hash table, loop third time to search the swap (inner loop up to 9 counts as constant), loop fourth time to reduce back to number.

#FB

#Array #Math
