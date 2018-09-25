// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <iostream>

using namespace std;
class Solution {
public:
    bool validWordSquare(vector<string>& words) {
        for (int i = 0; i < words.size(); ++i) {
            for (int j = 0; j < words[i].size(); ++j) {
                if (j >= words.size() || // row is too long
                    words[j].length() <= i || // words[j][i] out of range
                    words[i][j] != words[j][i]) { // mismatch
                    return false;
                }
            }
        }
        return true;
    }
};
// TEST
struct Test {
    vector<string> words;
    bool expected;
    void run() {
        Solution sol;
        bool act = sol.validWordSquare(words);
        cout << "Is valid word square? -> " << boolalpha << act << endl;
        assert(act == expected);
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {
                "abcd",
                "bnrt",
                "crmy",
                "dtye"
            },
            true
        },
        {
            {
                "abcd",
                "bnrt",
                "crm",
                "dt"
            },
            true
        },
        {
            {
                "abcd",
                "bnrt",
                "crm",
                "dtxx"
            },
            false
        },
        {
            {
                "abcd",
                "",
                "crm",
                "dtxx"
            },
            false
        },
        {
            {
                "abc",
                "bnr",
                "crm",
                ""
            },
            true 
        },
        {
            {
                "ball",
                "area",
                "read",
                "lady"
            },
            false
        },
        {
            {
                "ball",
                "asee",
                "let",
                "lep"
            },
            false
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
