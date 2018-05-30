// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <string>
#include <unordered_map>
#include <initializer_list>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<vector<string>> groupStrings(vector<string>& strings) {
        auto genSignature = [](const string& s) -> string {
            if (s.length() == 0) { return s; }
            int offset = s[0] - 'a';
            string sig = s;
            for (int i = 0; i < s.length(); ++i) {
                sig[i] = 'a' + (s[i] - 'a' - offset + 26) % 26;
            }
            return sig;
        };
        
        unordered_map<string, vector<string>> sigMap;
        for (const string& s: strings) {
            sigMap[genSignature(s)].push_back(s);
        }
        vector<vector<string>> ans;
        for (const auto& e: sigMap) {
            ans.push_back(e.second);
        }
        return ans;
    }
};
int main() {
    Solution sol;
    initializer_list<string> ilist = {
        "abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"
    };
    vector<string> tests(ilist);
    for (const auto& v: sol.groupStrings(tests)) {
        for (const string& w: v) {
            cout << w << " ";
        }
        cout << endl;
    }
    return 0;
}