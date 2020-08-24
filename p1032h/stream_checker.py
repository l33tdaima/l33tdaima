from typing import List


class TrieNode:
    def __init__(self):
        self.next = {}
        self.is_word = False

    def add(self, word: str) -> None:
        p = self
        for c in word:
            if not c in p.next:
                p.next[c] = TrieNode()
            p = p.next[c]
        p.is_word = True

    def has(self, word: str) -> bool:
        p = self
        for c in word:
            if not c in p.next:
                return False
            p = p.next[c]
            if p.is_word:
                return True
        return False


class StreamChecker:
    def __init__(self, words: List[str]):
        self.trie = TrieNode()
        self.max_len = 0
        for w in words:
            self.trie.add(w[::-1])
            self.max_len = max(self.max_len, len(w))
        self.buffer = list()

    def query(self, letter: str) -> bool:
        self.buffer.insert(0, letter)
        if len(self.buffer) > self.max_len:
            self.buffer.pop()
        return self.trie.has(self.buffer)


# Your StreamChecker object will be instantiated and called as such:
# obj = StreamChecker(words)
# param_1 = obj.query(letter)
tests = [
    (
        ["c", "cd", "f", "kl"],
        [
            ("a", False),
            ("b", False),
            ("c", True),
            ("d", True),
            ("e", False),
            ("f", True),
            ("g", False),
            ("h", False),
            ("i", False),
            ("j", False),
            ("k", False),
            ("l", True),
        ],
    ),
    (
        ["ab", "ba", "aaab", "abab", "baa"],
        (
            ("a", False),
            ("a", False),
            ("a", False),
            ("a", False),
            ("a", False),
            ("b", True),
            ("a", True),
            ("b", True),
            ("a", True),
            ("b", True),
            ("b", False),
            ("b", False),
            ("a", True),
            ("b", True),
            ("a", True),
            ("b", True),
            ("b", False),
            ("b", False),
            ("b", False),
            ("a", True),
            ("b", True),
            ("a", True),
            ("b", True),
            ("a", True),
            ("a", True),
            ("a", False),
            ("b", True),
            ("a", True),
            ("a", True),
            ("a", False),
        ),
    ),
]
for t in tests:
    print("Testing StreamChecker for", t[0])
    sc = StreamChecker(t[0])
    for q in t[1]:
        assert sc.query(q[0]) == q[1]
    print("passed")
