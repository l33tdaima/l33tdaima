# 341. Flatten Nested List Iterator (Medium)

You are given a nested list of integers `nestedList`. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Implement the `NestedIterator` class:

- NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
- int next() Returns the next integer in the nested list.
- boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.

### Example 1:

```
Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].
```

### Example 2:

```
Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
```

### Constraints:

- 1 <= nestedList.length <= 500
- The values of the integers in the nested list is in the range [-10^6, 10^6].

## Solution

- Use a stack to store the current level and all the way to the root level.
- Move iterator state when calling hasNext() instead of next(), it is better for reusing code of pushing and poping stack.
- next() calls hasNext() inside

#FB #GOOGL #TWTR

#Stack #Design
