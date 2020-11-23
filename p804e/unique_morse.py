from typing import List


class Solution:
    MORSE = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--..",
    ]

    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        morse_codes = set()
        for word in words:
            tf = [Solution.MORSE[ord(c) - 97] for c in word]
            morse_codes.add("".join(tf))
        return len(morse_codes)


# TESTS
for words, expected in [
    (["aaa"], 1),
    ([], 0),
    (["gin", "zen"], 1),
    (["gin", "zen", "gig", "msg"], 2),
]:
    sol = Solution()
    actual = sol.uniqueMorseRepresentations(words)
    print("# of different transformations in", words, "->", actual)
    assert actual == expected
