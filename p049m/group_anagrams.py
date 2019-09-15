from typing import List
from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = defaultdict(list)
        for s in strs:
            sig = [0] * 26
            for c in s:
                sig[ord(c) - ord("a")] += 1
            ans[tuple(sig)].append(s)
        return ans.values()


# TEST
t = ["eat", "tea", "tan", "ate", "nat", "bat", "a", "a", "", ""]
sol = Solution()
print("Group anagrams ->\n", sol.groupAnagrams(t))
