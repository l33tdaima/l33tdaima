import random


class RandomizedSet:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.map = dict()
        self.lst = list()

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val in self.map:
            return False
        else:
            self.lst.append(val)
            self.map[val] = len(self.lst) - 1
            return True

    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        if val in self.map:
            i = self.map[val]
            # swap to-be-deleted with the last one
            self.lst[i] = self.lst[-1]
            self.map[self.lst[-1]] = i
            del self.map[val]
            self.lst.pop()
            return True
        else:
            return False

    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
        i = random.randint(0, len(self.lst) - 1)
        return self.lst[i]


randomSet = RandomizedSet()
# Inserts 1 to the set. Returns true as 1 was inserted successfully.
assert randomSet.insert(1) == True
# Returns false as 2 does not exist in the set.
assert randomSet.remove(2) == False
# Inserts 2 to the set, returns true. Set now contains [1,2].
assert randomSet.insert(2) == True
# getRandom should return either 1 or 2 randomly.
r1 = randomSet.getRandom()
assert r1 == 1 or r1 == 2
# Removes 1 from the set, returns true. Set now contains [2].
assert randomSet.remove(1) == True
# 2 was already in the set, so return false.
assert randomSet.insert(2) == False
# Since 2 is the only number in the set, getRandom always return 2.
assert randomSet.getRandom() == 2

randomSet = RandomizedSet()
assert randomSet.remove(0) == False
assert randomSet.remove(0) == False
assert randomSet.insert(0) == True
assert randomSet.getRandom() == 0
assert randomSet.remove(0) == True
assert randomSet.insert(0) == True
