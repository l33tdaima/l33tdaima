# 929. Unique Email Addresses (Easy)

Every _valid email_ consists of a _local name_ and a _domain name_, separated by the `'@'` sign. Besides lowercase letters, the email may contain one or more `'.'` or `'+'`.

- For example, in `"alice@leetcode.com"`, `"alice"` is the _local name_, and `"leetcode.com"` is the _domain name_.

If you add periods `'.'` between some characters in the _local name_ part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule _does not apply_ to _domain names_.

- For example, `"alice.z@leetcode.com"` and `"alicez@leetcode.com"` forward to the same email address.

If you add a plus `'+'` in the _local name_, everything after the first plus sign _will be ignored_. This allows certain emails to be filtered. Note that this rule _does not apply_ to _domain names_.

- For example, `"m.y+name@email.com"` will be forwarded to `"my@email.com"`.

It is possible to use both of these rules at the same time.

Given an array of strings `emails` where we send one email to each `email[i]`, return the number of different addresses that actually receive mails.

### Example 1:

```
Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
```

### Example 2:

```
Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3
```

### Note:

- `1 <= emails.length <= 100`
- `1 <= emails[i].length <= 100`
- `email[i]` consist of lowercase English letters, `'+'`, `'.'` and `'@'`.
- Each `emails[i]` contains exactly one `'@'` character.
- All local and domain names are non-empty.
- Local names do not start with a `'+'` character.

#GOOGL #ADBE

#String
