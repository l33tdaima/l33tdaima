class Solution:
    def toGoatLatin(self, S: str) -> str:
        vowel = set("aeiouAEIOU")

        def goat_latin(i: int, w: str) -> str:
            if len(w) == 0:
                return w
            if w[0] not in vowel:
                w = w[1:] + w[0]
            return w + "ma" + "a" * (i + 1)

        return " ".join(goat_latin(i, w) for i, w in enumerate(S.split()))


# TESTS
tests = [
    ("a", "amaa"),
    ("b", "bmaa"),
    ("bc", "cbmaa"),
    ("I  speak Goat Latin", "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"),
    (
        "The quick brown fox jumped over the lazy dog",
        "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa",
    ),
]
for t in tests:
    sol = Solution()
    actual = sol.toGoatLatin(t[0])
    print(f'Goat Latin of "{t[0]}" ->', actual)
    assert actual == t[1]
