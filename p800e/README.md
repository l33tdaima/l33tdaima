# 800. Similar RGB Color (Easy)

In the following, every capital letter represents some hexadecimal digit from 0 to f.

The red-green-blue color "#AABBCC" can be written as "#ABC" in shorthand.  For example, "#15c" is shorthand for the color "#1155cc".

Now, say the similarity between two colors "#ABCDEF" and "#UVWXYZ" is -(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2.

Given the color "#ABCDEF", return a 7 character color that is most similar to #ABCDEF, and has a shorthand (that is, it can be represented as some "#XYZ"

### Example 1:
```
Input: color = "#09f166"
Output: "#11ee66"
Explanation:  
The similarity is -(0x09 - 0x11)^2 -(0xf1 - 0xee)^2 - (0x66 - 0x66)^2 = -64 -9 -0 = -73.
This is the highest among any shorthand color.
```
### Note:
- color is a string of length 7.
- color is a valid RGB color: for i > 0, color[i] is a hexadecimal digit from 0 to f.
- Any answer which has the same (highest) similarity as the best answer will be accepted.
- All inputs and outputs should use lowercase letters, and the output is 7 characters.

## Solution
The requirement is to maximize *similarity* which is given by a negative square of distance to one of 16 shorthand candidates 00, 11, to FF, which is equivalent to minimize square.

- For each 8-bit RGB code P, check it most significant digit, let us call it ZZ
  - if P >= 0xZZ, find min{ZZ, (Z+1)(Z+1)}
  - else find min{ZZ, (Z-1)(Z-1)}

### Improvement
Notice that the distance of each bracket is always 17, 0xAA - 0x99 = 0x11. Hence for any 8-bit code P, the most significant digit after (P + 8) / 17 will yield the correct digit which is closest.

#GOOGL

#Math #String
