class Solution:
    def partitionLabels(self, s: str) -> list[int]:
        last_index = {c: i for i, c in enumerate(s)}
        ans, start, last = [], 0, -1
        for i, c in enumerate(s):
            last = max(last, last_index[c])
            if i == last:
                ans.append(last - start + 1)
                start = i + 1
        return ans


# TESTS
for s, expected in [
    ("abc", [1, 1, 1]),
    ("abca", [4]),
    ("zzcbzchfihi", [6, 5]),
    ("abcdaefghijek", [5, 7, 1]),
    ("ababcbacadefegdehijhklij", [9, 7, 8]),
    ("qiejxqfnqceocmy", [13, 1, 1]),
]:
    sol = Solution()
    actual = sol.partitionLabels(s)
    print("Partition labels of", s, "->", actual)
    assert actual == expected
