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
1. Count for each task (A-Z) O(N);
2. Sort by count O(26*log(26));
3. Cut by cooling period (n + 1), compute the count of tasks beyond this cutoff as substitutes;
4. Fill idles for all the tasks within the period, maxCount - 1 - count, count them, O(26);
5. Sum of least intervals = overallCount + max(sum(idles) - sum(substitutes), 0), as if we have extra substitute tasks we don't have to fill by idles, that is why idles is compensated by substitutes.

#FB
#Array #Greedy #Queue
