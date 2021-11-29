from collections import defaultdict

# UnionFind using email as id
class UnionFind:
    def __init__(self):
        self.parent: dict[str, str] = dict()

    def root(self, i: str) -> str:
        while self.parent[i] != i:
            self.parent[i] = self.parent[self.parent[i]]  # path compression
            i = self.parent[i]
        return i

    def union(self, p: str, q: str) -> None:
        if p not in self.parent:
            self.parent[p] = p
        if q not in self.parent:
            self.parent[q] = q
        self.parent[self.root(p)] = self.root(q)

    def trees(self) -> dict:
        trees = defaultdict(list)
        for email in self.parent.keys():
            trees[self.root(email)].append(email)
        return trees


class Solution:
    def accountsMerge(self, accounts: list[list[str]]) -> list[list[str]]:
        union_find = UnionFind()
        email_to_name = dict()
        for account in accounts:
            name = account[0]
            for email in account[1:]:
                email_to_name[email] = name
                union_find.union(email, account[1])

        return [
            [email_to_name[root]] + sorted(emails)
            for root, emails in union_find.trees().items()
        ]


# TESTS
for accounts, expected in [
    (
        [
            ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
            ["John", "johnsmith@mail.com", "john00@mail.com"],
            ["Mary", "mary@mail.com"],
            ["John", "johnnybravo@mail.com"],
        ],
        [
            [
                "John",
                "john00@mail.com",
                "john_newyork@mail.com",
                "johnsmith@mail.com",
            ],
            ["John", "johnnybravo@mail.com"],
            ["Mary", "mary@mail.com"],
        ],
    ),
    (
        [
            ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
            ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
            ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
            ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
            ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"],
        ],
        [
            ["Ethan", "Ethan0@m.co", "Ethan4@m.co", "Ethan5@m.co"],
            ["Gabe", "Gabe0@m.co", "Gabe1@m.co", "Gabe3@m.co"],
            ["Hanzo", "Hanzo0@m.co", "Hanzo1@m.co", "Hanzo3@m.co"],
            ["Kevin", "Kevin0@m.co", "Kevin3@m.co", "Kevin5@m.co"],
            ["Fern", "Fern0@m.co", "Fern1@m.co", "Fern5@m.co"],
        ],
    ),
]:
    sol = Solution()
    actual = sol.accountsMerge(accounts)
    print("Merged accounts ->", actual)
    assert sorted(actual) == sorted(expected)
