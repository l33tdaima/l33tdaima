# 390. Elimination Game (Medium)

There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Find the last number that remains starting with a list of length n.

Example:

Input:
n = 9,
1 2 3 4 5 6 7 8 9
x   x   x   x   x
2 4 6 8
  x   x
2 6
x
6

Output:
6

## Solution
This is similar to famous #Josephus problem special case k = 2 which can be simulated by a cyclic linked list.

### The math based solution
Let us denote the result of n starting from left by f(n), the result when start from right to left f'(n) = n+1-f(n), e.g. 
f(2) = 2, f'(2) = 1 = 2 + 1 - 2;
f(3) = 2, f'(3) = 2 = 3 + 1 - 2;
f(4) = 2, f'(4) = 3 = 4 + 1 - 2;
the recursion is f(n) = 2 * (2/n + 1 - f(n/2)), e.g.
  1,2,3,4,5,6,7,8,9
after one pass, we have
  2,4,6,8
which is 2 times the result of 1,2,3,4 from right to left f'(4) = 4 + 1 -f(4)

### Counting base solution
The solution is to process leveraging a flag variable alternating left or right per round, a remaining varible shrinking by half per round, a step variable double each round, and the head of each round.

#Array #Math
