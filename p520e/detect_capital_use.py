class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        if len(word) <= 1:
            return True
        if word[0].isupper():
            return word[1:].isupper() or word[1:].islower()
        else:
            return word[1:].islower()

    def detectCapitalUseV1(self, word: str) -> bool:
        return word.islower() or word.isupper() or word.istitle()

    def detectCapitalUseV2(self, word: str) -> bool:
        cap = 0
        for c in word:
            if c >= "A" and c <= "Z":
                cap += 1
        return (
            cap == len(word)
            or cap == 0
            or (cap == 1 and word[0] >= "A" and word[0] <= "Z")
        )


# TESTS
tests = [
    ("USA", True),
    ("G", True),
    ("f", True),
    ("FlaG", False),
    ("leetcode", True),
    ("Google", True),
]
for t in tests:
    sol = Solution()
    actual = sol.detectCapitalUse(t[0])
    print("The usage of capitals in", t[0], "is right? ->", actual)
    assert (
        t[1]
        == actual
        == sol.detectCapitalUseV1(t[0])
        == sol.detectCapitalUseV2(t[0])
    )
