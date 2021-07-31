class MapSumV1:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.d = dict()

    def insert(self, key: str, val: int) -> None:
        self.d[key] = val

    def sum(self, prefix: str) -> int:
        return sum(self.d[key] for key in self.d if key.startswith(prefix))


from collections import defaultdict


class TrieNode:
    def __init__(self):
        self.child = defaultdict(TrieNode)
        self.sum = 0  # Store the sum of values of all strings go through this node.


class MapSumV2:
    def __init__(self):
        self.root = TrieNode()
        self.map = defaultdict(int)

    def insert(self, key: str, val: int) -> None:
        # if the key already existed, the original key-value pair will be overridden to the new one.
        diff = val - self.map[key]
        curr = self.root
        for c in key:
            curr = curr.child[c]
            curr.sum += diff
        self.map[key] = val

    def sum(self, prefix: str) -> int:
        curr = self.root
        for c in prefix:
            if c not in curr.child:
                return 0
            curr = curr.child[c]
        return curr.sum


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)

# TESTS
obj = MapSumV2()
obj.insert("apple", 3)
assert obj.sum("ap") == 3
obj.insert("app", 2)
assert obj.sum("ap") == 5
