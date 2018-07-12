// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<string> generatePossibleNextMoves(string s) {
        vector<string> ans;
        for (int i = 0; i < int(s.length()) - 1; ++i) {
            if (s[i] == '+' && s[i+1] == '+') {
                ans.push_back(s.substr(0, i) + "--" + s.substr(i+2));
            }
        }
        return ans;
    }
};

int main(int argc, char const *argv[])
{
    vector<string> tests = {
        "",
        "++++",
        "+-+-",
        "+-++++-",
    };
    Solution sol;
    for (auto& t: tests) {
        cout << "Possible next moves are -> ["; 
        vector<string> actual = sol.generatePossibleNextMoves(t);
        for (auto& s: actual) {
            cout << s << ", ";
        }
        cout << "]" << endl;
    }
    return 0;
}
