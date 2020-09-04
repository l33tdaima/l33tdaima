// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <iostream>
#include <assert.h>

using namespace std;

class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        return (s + s).find(s, 1) < s.length();
    }
};

struct Test {
    string s;
    bool expected;

    void run() const {
        Solution sol;
        bool actual = sol.repeatedSubstringPattern(s);
        cout << "Repeated substring pattern in " << s
             << " -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};
// TESTS
int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {"abab", true},
        {"aba", false},
        {"abcabcabcabc", true},
        {"abcabc", true},
        {"abcab", false},
        {"zzzzzz", true},
        {"bb", true},
    };
    for (auto& t: tests) t.run();
    return 0;
}
