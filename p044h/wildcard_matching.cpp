// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
    int count(string s, char target) {
        int count = 0;
        for (char c: s) { if (c == target) count ++; }
        return count;
    }
public:
    bool isMatchRec(string s, string p) {
        if (s.empty()) {
            return p.size() == count(p, '*');
        }
        if (p.empty()) {
            return s.empty();
        }
        if (s[s.size()-1] == p[p.size()-1] || p[p.size()-1] == '?') {
            return isMatchRec(s.substr(0, s.size()-1),
                              p.substr(0, p.size()-1));
        }
        if (p[p.size()-1] == '*') {
            return isMatchRec(s, p.substr(0, p.size()-1)) ||
                   isMatchRec(s.substr(0, s.size()-1), p);
        }
        return false;
    }
    bool isMatchDP(string s, string p) {
        int slen = s.size(), plen = p.size();
        vector<vector<bool>> dp(slen + 1, vector<bool>(plen + 1, false));
        dp[0][0] = true; // both empty
        for (int j = 1; j <= plen; ++j) {
            if (p[j-1] == '*') { dp[0][j] = true; }
            else { break; }
        }
        for (int i = 1; i <= slen; ++i) {
            for (int j = 1; j <= plen; ++j) {
                if (p[j-1] != '*') {
                    dp[i][j] = dp[i-1][j-1] && (s[i-1] == p[j-1] || p[j-1] == '?');
                } else {
                    dp[i][j] = dp[i][j-1] || dp[i-1][j];
                }
            }
        }
        return dp[slen][plen];
    }
    bool isMatch(string s, string p) {
        int i = 0, j = 0;
        int asterisk = -1, ss = 0;
        while (i < s.size()) {
            if (j < p.size() && (p[j] == '?' || s[i] == p[j])) {
                i++; j++;
            }
            else if (j < p.size() && p[j] == '*') {
                asterisk = j++; ss = i; 
            }
            // no match so far
            else if (asterisk >= 0) {
                j = asterisk + 1; i = ++ss;
            } else {
                return false;
            }
        }
        while (j < p.size() && p[j] == '*') { j++; }
        return j == p.size();
    }
};
// Test
struct Test {
    string s;
    string p;
    bool expected;
    void run() {
        Solution sol;
        cout << "isMatch('" << s << "', '" << p << "'" << ") -> "
             << boolalpha << (sol.isMatchRec(s, p) == expected) << ", "
             << (sol.isMatchDP(s, p) == expected) << ", "
             << (sol.isMatch(s, p) == expected) << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {"aa", "a", false},
        {"a", "*", true},
        {"cb", "?a", false},
        {"adceb", "*a*b", true},
        {"acdcb", "a*c?b", false},
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
