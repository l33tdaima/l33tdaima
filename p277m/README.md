# 277. Find the Celebrity (Medium)

Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.

Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

## Solution
The first loop is to find the candidate by following, if candidate knows i, then switch candidate. In detail, suppose the candidate after the first for loop is person k, it means 0 to k-1 cannot be the celebrity, because they know a previous or current candidate, or they are unknown to a previous candidate. Also, since k knows no one between k+1 and n-1, k+1 to n-1 can not be the celebrity either. Therefore, k is the only possible celebrity, if there exists one.

The remaining job is to check if k indeed does not know any other persons and all other persons know k.

To this point, I actually realize that we can further shrink the calling of knows method. For example, we don't need to check if k knows k+1 to n-1 in the second loop, because the first loop has already done that.

#LNKD #FB
#Array
