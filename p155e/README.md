# 155. Min Stack (Easy)

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack.

### Example:
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```

## Solution
Store a tuple of actual number along with the min value so far when pushing the stack.

To improve the memory usage, we can only store the previous min value on the same stack when seeing a new min value, and when poping the min value, we can now reinstate the previous min value by doing an extra pop.

#GOOGL #AMZN #BBG #UBER #SNAP #Zenefits

#Stack #Design
