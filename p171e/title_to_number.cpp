// g++ -std=c++11 *.cpp -o test && ./test && rm -f test

#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int titleToNumber(string s) {
        int ans = 0;
        for (auto c: s) {
            ans = ans * 26 + (c - 'A' + 1) ;
        }
        return ans;
    }
};

int main(int argc, char const *argv[])
{
    vector<string> tests = {
        "A",
        "AB",
        "ZY"
    };
    Solution sol;
    for (auto& t: tests) {
        cout << t << " -> " << sol.titleToNumber(t) << endl;
    }
    return 0;
}
