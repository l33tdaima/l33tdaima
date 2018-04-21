# 721. Accounts Merge (Medium)

Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

## Example 1:
- Input: 
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
- Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]

Explanation: 
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

Note:
The length of accounts will be in the range [1, 1000].
The length of accounts[i] will be in the range [1, 10].
The length of accounts[i][j] will be in the range [1, 30].

## Solution

### Clarification
There won't be the case that two different people share the same emails.
Any special requirments on printing format?

### Algorithm
- Assign the unique id for each account, basically 0 to n-1, and scan the normalized the data, {name: email}, and establish a reverse map from email to account id, e.g.
  ```
  {
    "johnsmith@mail.com": [0, 2],
    "john00@mail.com": [0],
    "johnnybravo@mail.com": [1],
    "john_newyork@mail.com": [2],
    "mary@mail.com": [3]
  }
  ```
- This data basically is edges connecting nodes in a graph. Now the problem becomes a graph traversal problem can be solved by DFS.
- Iterate each account in the original input, and for each email, using the mapped edges to traverse all the linked nodes and merge emails into a set then convert to list.

#FB

#Depth-First Search #Union Find