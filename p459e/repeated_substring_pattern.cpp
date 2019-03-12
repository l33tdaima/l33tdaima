// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>

#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    bool repeatedSubstringPatternV1(string s) {
        return (s + s).substr(1, s.size() * 2 - 2).find(s) != string::npos;
    }
    bool repeatedSubstringPatternV2(string s) {
        return (s + s).find(s, 1) < s.length();
    }
};
int main(int argc, char* argv[]) {
    vector<string> tests = {
        "abcabc",
        "abab",
        "abcab"
        "zzzzzz"
    };
    Solution sol;
    for (auto& s: tests) {
        cout << "Repeated substring pattern in " << s
             << " -> " << boolalpha << sol.repeatedSubstringPatternV2(s)
             << endl;
    }
    return 0;
}
