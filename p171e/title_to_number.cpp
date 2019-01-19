// g++ -std=c++11 *.cpp -o test && ./test && rm -f test

#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int titleToNumber(string s) {
        int ans = 0, pow = 1;
        for (int i = s.length() - 1; i >= 0; --i) {
            assert(s[i] >= 'A' && s[i] <= 'Z');
            ans += (s[i] - 'A' + 1) * pow;
            pow *= 26;
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
