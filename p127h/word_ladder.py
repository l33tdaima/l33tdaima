from typing import List
import string


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordset = set(wordList)
        if not endWord in wordset:
            return 0
        queue = [(endWord, 1)]
        wordset.remove(endWord)
        while queue:
            w, dist = queue.pop(0)
            for i in range(len(w)):
                for c in string.ascii_lowercase:
                    tw = w[:i] + c + w[i + 1 :]
                    if tw == beginWord:
                        return dist + 1
                    if tw in wordset:
                        queue.append((tw, dist + 1))
                        wordset.remove(tw)
        return 0


# TESTS
for beginWord, endWord, wordList, expected in [
    ("hit", "cog", ["hot", "dot", "tog", "cog"], 0),
    ("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"], 5),
    ("hit", "cog", ["hot", "dot", "dog", "lot", "log"], 0),
    ("m", "n", ["a", "b", "c"], 0),
    ("a", "c", ["a", "b", "c"], 2),
    ("lag", "cog", ["hot", "dot", "dog", "lot", "log", "cog"], 3),
    ("hot", "dog", ["hot", "dot", "dog", "lot", "log", "cog"], 3),
]:
    sol = Solution()
    actual = sol.ladderLength(beginWord, endWord, wordList)
    print(f"Shortest sequence from '{beginWord}' to '{endWord}' ->", actual)
    assert actual == expected
