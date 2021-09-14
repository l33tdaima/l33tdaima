from collections import Counter


class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        source, target = Counter(text), Counter("balloon")
        return min(source[k] // target[k] for k in target)


# TESTS
for text, expected in [
    ("nlaebolko", 1),
    ("loonbalxballpoon", 2),
    ("leetcode", 0),
]:
    sol = Solution()
    actual = sol.maxNumberOfBalloons(text)
    print("The maximum number of instances in", text, "can form 'balloon' ->", actual)
    assert actual == expected
