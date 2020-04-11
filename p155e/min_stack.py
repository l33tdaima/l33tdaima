class MinStack:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []

    def push(self, x: int) -> None:
        if len(self.stack) > 0 and x > self.stack[-1][1]:
            self.stack.append((x, self.stack[-1][1]))
        else:
            self.stack.append((x, x))

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]


# Your MinStack object will be instantiated and called as such:
minStack = MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-1)
assert minStack.getMin() == -2
minStack.pop()
assert minStack.top() == 0
assert minStack.getMin() == -2
