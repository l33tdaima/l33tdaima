class MyCircularQueue:
    def __init__(self, k: int):
        self.queue = [-1] * k
        self.size, self.cap = 0, k
        self.pf, self.pr = -1, -1

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False

        self.pr = (self.pr + 1) % self.cap
        self.queue[self.pr] = value
        self.size += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False

        self.pf = (self.pf + 1) % self.cap
        self.size -= 1
        return True

    def Front(self) -> int:
        if self.isEmpty():
            return -1

        return self.queue[(self.pf + 1) % self.cap]

    def Rear(self) -> int:
        if self.isEmpty():
            return -1

        return self.queue[self.pr]

    def isEmpty(self) -> bool:
        return self.size == 0

    def isFull(self) -> bool:
        return self.size == self.cap


# Your MyCircularQueue object will be instantiated and called as such:
mcq = MyCircularQueue(3)
assert mcq.enQueue(1) == True
assert mcq.enQueue(2) == True
assert mcq.enQueue(3) == True
assert mcq.enQueue(4) == False
assert mcq.Rear() == 3
assert mcq.isFull() == True
assert mcq.deQueue() == True
assert mcq.enQueue(4) == True
assert mcq.Rear() == 4
