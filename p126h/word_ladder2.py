from typing import List
from collections import defaultdict


class Solution:
    def findLadders(
        self, beginWord: str, endWord: str, wordList: List[str]
    ) -> List[List[str]]:
        wordSet = set(wordList)
        if endWord not in wordSet:
            return []
        layer = {}
        layer[beginWord] = [[beginWord]]
        while layer:
            # returns [] on missing keys, just to simplify code
            newlayer = defaultdict(list)
            for word in layer:
                if word == endWord:
                    return layer[word]  # return all found sequences
                for i in range(len(word)):
                    for c in "abcdefghijklmnopqrstuvwxyz":
                        newWord = word[:i] + c + word[i + 1 :]
                        if newWord in wordSet:
                            newlayer[newWord] += [j + [newWord] for j in layer[word]]
            wordSet -= set(newlayer.keys())  # remove from dictionary to prevent loops
            layer = newlayer

        return []


# TESTS
for beginWord, endWord, wordList, expected in [
    ("m", "n", ["a", "b", "c"], [],),
    ("a", "c", ["a", "b", "c"], [["a", "c"]],),
    (
        "hit",
        "cog",
        ["hot", "dot", "dog", "lot", "log", "cog"],
        [["hit", "hot", "dot", "dog", "cog"], ["hit", "hot", "lot", "log", "cog"],],
    ),
    (
        "lop",
        "cog",
        ["hot", "dot", "dog", "lot", "log", "cog"],
        [["lop", "log", "cog"]],
    ),
    ("dog", "bag", ["hot", "dot", "dog", "lot", "log", "cog"], []),
    ("hot", "dog", ["hot", "dot", "dog", "lot", "log", "cog"], [["hot", "dot", "dog"]]),
    (
        "hit",
        "dog",
        ["hot", "dot", "dog", "lot", "log", "cog"],
        [["hit", "hot", "dot", "dog"]],
    ),
]:
    sol = Solution()
    actual = sol.findLadders(beginWord, endWord, wordList)
    print("Word ladder from", beginWord, "to", endWord, "->", actual)
    assert actual == expected
