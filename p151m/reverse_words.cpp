#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    void reverseWords(string &s) {
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
    }
};
// TEST
struct Test {
    string s;
    void run() {
        cout << "Reverse '" << s;
        cout << "' -> '";
        Solution sol;
        sol.reverseWords(s);
        cout << s << "'" << endl;
    }
};
int main() {
    vector<Test> tests = {
        {""},
        {"thesky"},
        {" t  e a "},
        {"the sky is blue"}
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}