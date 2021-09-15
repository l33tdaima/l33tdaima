class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        ls, i, j = list(s), 0, len(s) - 1
        while i < j:
            if not ls[i].isalpha():
                i += 1
            elif not ls[j].isalpha():
                j -= 1
            else:
                ls[i], ls[j] = ls[j], ls[i]
                i, j = i + 1, j - 1
        return "".join(ls)


# TESTS
for s, expected in [
    ("ab-cd", "dc-ba"),
    ("a-bC-dEf-ghIj", "j-Ih-gfE-dCba"),
    ("Test1ng-Leet=code-Q!", "Qedo1ct-eeLg=ntse-T!"),
]:
    sol = Solution()
    actual = sol.reverseOnlyLetters(s)
    print("Reverse letters only", s, "->", actual)
    assert actual == expected
