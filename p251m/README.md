# 251. Flatten 2D Vector (Medium)

Implement an iterator to flatten a 2d vector.

### Example:
```
Input: 2d vector =
[
  [1,2],
  [3],
  [4,5,6]
]
Output: [1,2,3,4,5,6]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,2,3,4,5,6].
```
### Follow up:
As an added challenge, try to code it using only iterators in C++ or iterators in Java.

## Solution
The challenge is how to move the iterator(pointer) to the next valid position, both in constructor and in `next()`.

#Airbnb #AMZN

#Design
