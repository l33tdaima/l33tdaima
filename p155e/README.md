# 155. Min Stack (Easy)

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element val onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

### Example:

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

## Solution

Store a tuple of actual number along with the min value so far when pushing the stack.

To improve the memory usage, we can only store the previous min value on the same stack when seeing a new min value, and when poping the min value, we can now reinstate the previous min value by doing an extra pop.

#GOOGL #AMZN #BBG #UBER #SNAP #Zenefits

#Stack #Design
