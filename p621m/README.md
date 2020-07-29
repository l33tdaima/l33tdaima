# 621. Task Scheduler (Medium)

You are given a char array representing tasks CPU need to do. It contains capital letters A to Z where each letter represents a different task. Tasks could be done without the original order of the array. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

You need to return the least number of units of times that the CPU will take to finish all the given tasks.

### Example 1:
```
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.
```

### Example 2
```
Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
```

### Example 3:
```
Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: 
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
```

### Constraints:
- The number of tasks is in the range [1, 10000].
- The integer n is in the range [0, 100].

## Solution
### Approach 1
- Count the frequency of each task and find out the most frequent task `most_freq`
- The number of idles we need at most is `(most_freq - 1) * n`, e.g. `tasks = ["A","A","A","B","B","C"], n = 2`, we need `(3 - 1) * 2 = 4` idles at most.
- Next, we can reduce some idles using other tasks with less frequency, capped by 0
- The final answer is len(tasks) + idles


### Approach 2
- Count the frequency of each task and find out the most frequent task `most_freq` as well as the count of `most_freq`
- The pattern is `(n+1)*(most_freq-1)+most_freq_count`
```
Example: [A A A A A B B B B B C C] n = 2,
  A x x A x x A x x A x x A
  A B x A B x A B x A B x A B
  A B C A B C A B x A B x A B
(2 + 1) * (5 - 1) + 2 = 14
```
- Another case is when we can fill all idles
```
Example: [A A A A A B B B B B C C D D E ] n = 2
  A x x A x x A x x A x x A (Insert A)
  A B x A B x A B x A B x A B (insert B)
  A B C A B C A B x A B x A B(insert C)
  A B C A B C A B D A B D A B (insert D) at this point there is idles needed
  A B C A B C A B D A B D A B E (insert E)
len(task) = 15
```

#FB

#Array #Greedy #Queue
