from typing import List
from bisect import bisect_left


class Solution:
    def suggestedProducts(
        self, products: List[str], searchWord: str
    ) -> List[List[str]]:
        products.sort()
        ans, prefix, i = [], "", 0
        for c in searchWord:
            prefix += c
            i = bisect_left(products, prefix, i)
            ans.append([w for w in products[i : i + 3] if w.startswith(prefix)])
        return ans


# TESTS
for products, searchWord, expected in [
    (
        ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
        "mouse",
        [
            ["mobile", "moneypot", "monitor"],
            ["mobile", "moneypot", "monitor"],
            ["mouse", "mousepad"],
            ["mouse", "mousepad"],
            ["mouse", "mousepad"],
        ],
    ),
    (
        ["havana"],
        "havana",
        [["havana"], ["havana"], ["havana"], ["havana"], ["havana"], ["havana"]],
    ),
    (
        ["bags", "baggage", "banner", "box", "cloths"],
        "bags",
        [
            ["baggage", "bags", "banner"],
            ["baggage", "bags", "banner"],
            ["baggage", "bags"],
            ["bags"],
        ],
    ),
    (["havana"], "tatiana", [[], [], [], [], [], [], []]),
]:
    sol = Solution()
    actual = sol.suggestedProducts(products, searchWord)
    assert actual == expected
