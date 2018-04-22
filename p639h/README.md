# 639. Decode Ways II (Hard)

A message containing letters from A-Z is being encoded to numbers using the following mapping way:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Beyond that, now the encoded string can also contain the character '*', which can be treated as one of the numbers from 1 to 9.

Given the encoded message containing digits and the character '*', return the total number of ways to decode it.

Also, since the answer may be very large, you should return the output mod 10^9 + 7.

### Example 1:
Input: "*"
Output: 9
Explanation: The encoded message can be decoded to the string: "A", "B", "C", "D", "E", "F", "G", "H", "I".

### Example 2:
Input: "1*"
Output: 9 + 9 = 18

### Note:
The length of the input string will fit in range [1, 10^5].
The input string will only contain the character '*' and digits '0' - '9'.

##Solution
```
        For dp[i-1]:

                  /           \
                 /             \
            s[i-1]='*'    s[i-1]>0     
                |               |
          + 9*dp[i-1]        + dp[i-1]

             
        For dp[i-2]:

                   /                                  \
                  /                                    \  
              s[n-2]='1'||'2'                         s[n-2]='*'
              /            \                       /             \     
        s[n-1]='*'         s[n-1]!='*'          s[n-1]='*'       s[n-1]!='*'
         /       \               |                  |              /         \
  s[n-2]='1'  s[n-2]='2'   num(i-2,i-1)<=26         |         s[n-1]<=6    s[n-1]>6
      |            |             |                  |              |            |
 + 9*dp[i-2]   + 6*dp[i-2]     + dp[i-2]       + 15*dp[i-2]    + 2*dp[i-2]   + dp[i-2]
```
#FB

#Dynamic Programming
