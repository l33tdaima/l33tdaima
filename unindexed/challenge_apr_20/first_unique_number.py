from typing import List


class UniqueListNode:
    def __init__(self, value: int):
        self.val = value
        self.prev = None
        self.next = None


class FirstUnique:
    def __init__(self, nums: List[int]):
        self._map = dict()
        self._head = UniqueListNode(0)
        self._tail = UniqueListNode(-1)
        self._head.next = self._tail
        self._tail.prev = self._head
        for n in nums:
            self.add(n)

    def showFirstUnique(self) -> int:
        return self._head.next.val

    def add(self, value: int) -> None:
        if value in self._map:
            node = self._map[value]
            if node:
                node.prev.next = node.next
                node.next.prev = node.prev
                self._map[value] = None
                del node
        else:
            # append a unique node
            node = UniqueListNode(value)
            node.next = self._tail
            node.prev = self._tail.prev
            self._tail.prev.next = node
            self._tail.prev = node
            self._map[value] = node

    def dump(self):
        print(f"map: {self._map}")
        p, ll = self._head, list()
        while p:
            ll.append(p.val)
            p = p.next
        print(f"linked list: {ll}")


# Your FirstUnique object will be instantiated and called as such:
# obj = FirstUnique(nums)
# param_1 = obj.showFirstUnique()
# obj.add(value)
def test1():
    firstUnique = FirstUnique([2, 3, 5])
    assert firstUnique.showFirstUnique() == 2
    firstUnique.add(5)
    assert firstUnique.showFirstUnique() == 2
    firstUnique.add(2)
    assert firstUnique.showFirstUnique() == 3
    firstUnique.add(3)
    assert firstUnique.showFirstUnique() == -1


def test2():
    firstUnique = FirstUnique([7, 7, 7, 7, 7, 7])
    assert firstUnique.showFirstUnique() == -1
    firstUnique.add(7)
    firstUnique.add(3)
    firstUnique.add(3)
    firstUnique.add(7)
    firstUnique.add(17)
    assert firstUnique.showFirstUnique() == 17


def test3():
    firstUnique = FirstUnique([809])
    assert firstUnique.showFirstUnique() == 809
    firstUnique.add(809)
    assert firstUnique.showFirstUnique() == -1


test1()
test2()
test3()
