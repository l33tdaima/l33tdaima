from typing import List


class Solution:
    def letterCasePermutationV1(self, S: str) -> List[str]:
        ans = []

        def backtrack(path: str, i: int) -> None:
            nonlocal S
            while i < len(S) and S[i].isdigit():
                path += S[i]
                i += 1
            if i == len(S):
                ans.append(path)
                return
            backtrack(path + S[i].lower(), i + 1)
            backtrack(path + S[i].upper(), i + 1)

        backtrack("", 0)
        return ans

    def letterCasePermutationV2(self, S: str) -> List[str]:
        ans = [""]
        for ch in S:
            if ch.isalpha():
                ans = [prefix + c for prefix in ans for c in [ch.lower(), ch.upper()]]
            else:
                ans = [prefix + ch for prefix in ans]
        return ans


# TESTS
for S, expected in [
    ("a1b2", ["a1b2", "a1B2", "A1b2", "A1B2"]),
    ("3z4", ["3z4", "3Z4"]),
    ("12345", ["12345"]),
    ("0", ["0"]),
]:
    sol = Solution()
    actual = sol.letterCasePermutationV1(S)
    print("Letter case permutation of", S, "->", actual)
    assert actual == expected
    assert expected == sol.letterCasePermutationV2(S)

