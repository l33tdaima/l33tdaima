from typing import List
from collections import defaultdict


class Solution:
    def groupAnagramsCount(self, strs: List[str]) -> List[List[str]]:
        ans = defaultdict(list)
        for s in strs:
            sig = [0] * 26
            for c in s:
                sig[ord(c) - ord("a")] += 1
            ans[tuple(sig)].append(s)
        return list(ans.values())

    def groupAnagramsSorted(self, strs: List[str]) -> List[List[str]]:
        ans = defaultdict(list)
        for s in strs:
            key = tuple(sorted(s))
            ans[key].append(s)
        return list(ans.values())


# TESTS
for strs, expected in [
    (
        ["eat", "tea", "tan", "ate", "nat", "bat"],
        [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
    ),
    ([""], [[""]]),
    (["a"], [["a"]]),
]:
    sol = Solution()
    actual = sol.groupAnagramsCount(strs)
    print("Group anagrams ->", actual)
    assert actual == expected
