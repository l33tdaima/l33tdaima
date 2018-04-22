# 56. Merge Intervals (Medium)

Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].

## Solution
- Sort the intervals by start then end;
- Iterate them, cases are
  - With overlapping;
  - Without overlapping;
- Add the last one.

#GOOGL #FB #MSFT #BBG #LNKD #TWTR #YELP

#Array #Sort
