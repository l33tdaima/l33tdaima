# 341. Flatten Nested List Iterator (Medium)

Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

### Example 1:
Given the list [[1,1],2,[1,1]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

### Example 2:
Given the list [1,[4,[6]]],

By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].

## Solution
- Use a stack to store the current level and all the way to the root level.
- Move iterator state when calling hasNext() instead of next(), it is better for reusing code of pushing and poping stack.
- next() calls hasNext() inside

#FB #GOOGL #TWTR

#Stack #Design
