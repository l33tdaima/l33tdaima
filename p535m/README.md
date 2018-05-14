# 535. Encode and Decode TinyURL (Medium)

Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

## Solution
- Create a global map for short to long store
- Encode is to get 7 random char from 62 chars from [A-Za-z0-9] and make sure it is not picked before.
- Decode is just look up from map.

#FB #GOOGL #AMZN #UBER

#Hash Table #Math
