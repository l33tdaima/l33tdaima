# 253. Meeting Rooms II (Medium)

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
```
Given [[0, 30],[5, 10],[15, 20]],
return 2.
```

## Solution
### Heap Approach
- Sort the intervals by start times in ascending order;
- Loop the intervals when maintaining previous end time in a min heap:
   - If found start time overlap against the top of heap, we have add a new room
   - otherwise the top of heap has been used, and need to be removed, the next earliest one will be used in the next iteration.

### Counter Approach
- Split the intervals into a tuple of `(time, start)` and `(time, end)`, and sort them by the value in ascending order;
- Loop the tuples and maintain just a counter which is the minimum number of rooms we need to host the meeting at any given time;
  - Increment the counter for a start time tuple;
  - Decrement the counter for an end time tuple;
- The result is the moving max of the whole process.
This approach doesn't need a heap, but the list to be sorted doubled. It doesn't run faster in OJ.

#GOOGL #FB #SNAP
#GOOGL.MJ

#Heap #Greedy #Sort

#Similar question [#252e](../p252e/README.md) [#253m](../p253m/README.md) 
