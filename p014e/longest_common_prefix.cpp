// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ans = "";
        if (strs.size() == 0) return ans;
        for (int j = 0; j < strs[0].length(); ++j) {
            char c = strs[0][j];
            for (int i = 1; i < strs.size(); ++i) {
                if (strs[i].length() == j || strs[i][j] != c) {
                    return ans;
                }
            }
            ans += c;
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<string> strs;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.longestCommonPrefix(strs);
        cout << "Longest common prefix -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {"flower", "flow", "flight"},
            "fl"
        },
        {
            {"dog", "racecar", "car"},
            ""
        },
        {
            {"single"},
            "single"
        },
        {
            {"single", "s"},
            "s"
        },

    };
    for (auto &t: tests) t.run();
    return 0;
}
