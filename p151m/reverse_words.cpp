// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        int ri = 0;
        for (int i = 0, l = 0; i < s.size();) {
            // move to the begin of a valid word
            while (i < s.size() && s[i] == ' ') i++;
            // set single space of the reduced string 
            if (i < s.size() && ri > 0) s[ri++] = ' ';
            l = ri;
            // copy to remove multiple spaces
            while (i < s.size() && s[i] != ' ') s[ri++] = s[i++];
            std::reverse(s.begin() + l, s.begin() + ri);
        }
        s.resize(ri);
        std::reverse(s.begin(), s.end());
        return s;
    }
};
// TEST
struct Test {
    string s;
    string expected;
    void run() {
        cout << "Reverse '" << s << "' -> '";
        Solution sol;
        string actual = sol.reverseWords(s);
        cout << actual << "'" << endl;
        assert(actual == expected);
    }
};
int main() {
    vector<Test> tests = {
        {"", ""},
        {"thesky", "thesky"},
        {" t  e a ", "a e t"},
        {"the sky is blue", "blue is sky the"},
        {"  hello world!  ", "world! hello"},
        {"a good   example", "example good a"}
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
