from typing import List
import re

class Solution:
    def spellcheckerV1(self, wordlist: List[str], queries: List[str]) -> List[str]:
        ht_exact = set(wordlist)
        ht_cap, ht_vowel = dict(), dict()
        for w in wordlist:
            wlower = w.lower()
            if wlower not in ht_cap:
                ht_cap[wlower] = w
            sig = re.sub("[aeiou]", "#", wlower)
            if sig not in ht_vowel:
                ht_vowel[sig] = w
        ans = []
        for q in queries:
            if q in ht_exact:
                ans.append(q)
            elif q.lower() in ht_cap:
                ans.append(ht_cap[q.lower()])
            elif (sig := re.sub("[aeiou]", "#", q.lower())) in ht_vowel:
                ans.append(ht_vowel[sig])
            else:
                ans.append("")
        return ans

    def spellcheckerV2(self, wordlist: List[str], queries: List[str]) -> List[str]:
        ht_exact = {w: w for w in wordlist}
        ht_cap = {w.lower(): w for w in wordlist[::-1]}
        ht_vowel = {re.sub("[aeiou]", "#", w.lower()): w for w in wordlist[::-1]}
        return [
            ht_exact.get(q)
            or ht_cap.get(q.lower())
            or ht_vowel.get(re.sub("[aeiou]", "#", q.lower()), "")
            for q in queries
        ]


# TESTS
for wordlist, queries, expected in [
    (
        ["KiTe", "kite", "hare", "Hare"],
        [
            "kite",
            "Kite",
            "KiTe",
            "Hare",
            "HARE",
            "Hear",
            "hear",
            "keti",
            "keet",
            "keto",
        ],
        ["kite", "KiTe", "KiTe", "Hare", "hare", "", "", "KiTe", "", "KiTe"],
    )
]:
    sol = Solution()
    actual = sol.spellcheckerV2(wordlist, queries)
    print("Spell checker ->", actual)
    assert actual == expected
