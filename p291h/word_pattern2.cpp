// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <unordered_map>
#include <unordered_set>

#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    bool wordPatternMatch(string pattern, string str) {
        unordered_map<char, string> psMap;
        unordered_set<string> set;
        return isMatch(pattern, 0, str, 0, psMap, set);
    }
    bool isMatch(const string& pattern, int pIndex,
                 const string& str, int sIndex,
                 unordered_map<char, string>& psMap,
                 unordered_set<string>& set) {
        if (pIndex == pattern.length() && sIndex == str.length()) {
            return true;
        }
        if (pIndex == pattern.length() || sIndex == str.length()) {
            return false;
        }
        char c = pattern[pIndex];
        // if this pattern char has been matched
        if (psMap.count(c)) {
            const string& s = psMap[c];
            if (str.substr(sIndex, s.length()) != s) {
                return false;
            } else {
                return isMatch(pattern, pIndex + 1, str, sIndex + s.length(), psMap, set);
            }
        }
        // or the first time to see this pattern char
        for (int k = 1; sIndex + k <= str.length(); ++k) {
            string s = str.substr(sIndex, k);
            if (set.count(s)) { continue; }
            psMap.emplace(c, s);
            set.emplace(s);
            if (isMatch(pattern, pIndex + 1, str, sIndex + k, psMap, set)) {
                return true;
            }
            // backtracking
            psMap.erase(c);
            set.erase(s);
        }
        return false;
    }
};

// Test
struct Test {
    string pattern;
    string str;
    bool expected;
    void run() {
        Solution sol;
        cout << "'" << str << "' follows the pattern '" << pattern
             << "' -> " << boolalpha << expected << endl;
        bool actual = sol.wordPatternMatch(pattern, str);
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            "d",
            "e",
            true
        },
        {
            "abab",
            "redblueredblue",
            true
        },
        {
            "aaaa",
            "asdasdasdasd",
            true
        },
        {
            "aabb",
            "xyzabcxzyabc",
            false
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
