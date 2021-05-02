from typing import List


class WordFilter:
    def __init__(self, words: List[str]):
        self.dict = dict()
        for index, w in enumerate(words):
            for i in range(1, len(w) + 1):
                for j in range(len(w)):
                    self.dict[(w[:i], w[j:])] = index

    def f(self, prefix: str, suffix: str) -> int:
        return self.dict.get((prefix, suffix), -1)


# Your WordFilter object will be instantiated and called as such:
# obj = WordFilter(words)
# param_1 = obj.f(prefix,suffix)
for words, prefix, suffix, expected in [
    (["apple"], "a", "e", 0),
    (["apple"], "p", "e", -1),
    (["apple"], "ap", "le", 0),
    (["bat", "bar"], "ba", "t", 0),
    (["bat", "bar"], "ba", "r", 1),
]:
    wf = WordFilter(words)
    actual = wf.f(prefix, suffix)
    assert actual == expected
