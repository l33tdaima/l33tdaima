// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <string>
#include <vector>
#include <utility>
#include <iostream>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstringKDistinct(string s, int k) {
        int map[256] = {0};
        int distinct = 0, maxLen = 0;
        for (int i = 0, substrStart = 0; i < s.length(); ++i) {
            // when moving i, we are looking for the local maxLen
            // for substring ending with s[i] qualifying distinct <= k
            map[s[i]] ++;
            if (map[s[i]] == 1) { distinct ++; }
            while (distinct > k) {
                if ((-- map[s[substrStart]]) == 0) { distinct --; }
                substrStart ++;
            }
            maxLen = max(maxLen, i - substrStart + 1);
            /*
            cout << "map[" << s[i] << "]=" << map[s[i]] 
                 << ", distinct=" << distinct << ", substrStart="
                 << substrStart << ", maxLen=" << maxLen
                 << endl;
            */
        }
        return maxLen; 
    }
};
// TEST
struct Test {
    string s;
    int k;
    int expected;
    void run() {
        Solution sol;
        int act = sol.lengthOfLongestSubstringKDistinct(s, k);
        cout << "Length of longest substring with K distinct in '" << s
             << "' -> " << act << " " << boolalpha << (act == expected)
             << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {"eceba", 2, 3},
        {"eceejk", 2, 4},
        {"eeeeeee", 2, 7},
        {"abcdefgh", 1, 1},
        {"abcdefgh", 3, 3},
        {"ecebaxyxyfeaeeeeeee", 5, 15},
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
