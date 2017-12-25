# 170. Two Sum III - Data structure design (Easy)

Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

For example,
add(1); add(3); add(5);
find(4) -> true
find(7) -> false

## Solution
To achieve quick add, O(n) find, we maintain a map of the number to count. The other design is to achieve quick find, but O(n) add, where the map is all the possible sum so far. 

#Design #Hash Table
#LNKD
