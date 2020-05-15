from collections import defaultdict


class Trie:
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.links = defaultdict(Trie)
        self.is_end = False

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        p = self
        for c in word:
            p = p.links[c]
        p.is_end = True

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        p = self
        for c in word:
            if c not in p.links:
                return False
            p = p.links[c]
        return p.is_end

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        p = self
        for c in prefix:
            if c not in p.links:
                return False
            p = p.links[c]
        return True


# Your Trie object will be instantiated and called as such:
obj = Trie()
obj.insert("apple")
assert obj.search("apple") == True
assert obj.search("app") == False
assert obj.startsWith("app") == True
obj.insert("app")
assert obj.search("app") == True
