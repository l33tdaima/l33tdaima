# 252. Meeting Rooms (Easy)

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return false.

## Solution
- Sort by start time
- End time of `i` must be less than start time of `i + 1`

#FB

#Sort

#Similar question [#252e](../p252e/README.md) [#253m](../p253m/README.md) 
