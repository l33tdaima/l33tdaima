# 253. Meeting Rooms II (Medium)

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.

## Solution
1. Sort the intervals by start times in ascending order;
2. Loop the intervals when maintaining previous end time in a min heap:
   - If found start time overlap against the top of heap, we have add a new room
   - otherwise the top of heap has been used, and need to be removed, the next earliest one will be used in the next iteration.

#GOOGL #FB #SNAP

#Heap #Greedy #Sort
