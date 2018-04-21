# 621. Task Scheduler (Medium)

Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
Note:
The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].

## Solution
There are two basis cases, n > 25 and n <= 25, and the result is either length of tasks (don't need idle), or length of tasks plus some amount of idles.

- Count for each task (A-Z) O(N), store them into an array of size 26;
- Sort by count O(26*log(26)) in descending order, so that we know how many chucks in total which is `maxOccurs-1`, and the expected size of each chuck is `n+1`;
- Accumulate from sorted task index 1 to `min(n, 25)`, calulate how many idles we need to fill the chunk, each contribution is `maxOccurs - 1 - count`;
  - If n > 25, we need additional idles which A-Z can't offer, `(n-25) * (maxOccurs - 1)`;
  - Now we have sumIdles.
- From index (n + 1) to 25, we also have some amount of tasks beyond this cutoff as substitutes for idles;
- Sum of least intervals = tasks.length + max(sumIdles - sumSubstitutes, 0), because if we have extra substitute tasks we don't have to fill by idles, that is why idles is compensated by substitutes.

#FB

#Array #Greedy #Queue
