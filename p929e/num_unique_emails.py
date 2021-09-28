from typing import List


class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        def normalize(email: str) -> str:
            local, domain = email.split("@")
            tokens = local.split("+")[0].split(".")
            return f"{''.join(tokens)}@{domain}"

        return len(set(map(normalize, emails)))


# TESTS
for emails, expected in [
    (
        [
            "test.email+alex@leetcode.com",
            "test.e.mail+bob.cathy@leetcode.com",
            "testemail+david@lee.tcode.com",
        ],
        2,
    ),
    (["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"], 3),
]:
    sol = Solution()
    actual = sol.numUniqueEmails(emails)
    print("# of unique emails in", emails, "->", actual)
    assert actual == expected
