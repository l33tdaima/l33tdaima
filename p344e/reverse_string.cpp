// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <utility>
#include <vector>
#include <iostream>

using namespace std;
class Solution {
public:
    string reverseString(string s) {
        string ans = s;
        int l = 0, r = s.size() - 1;
        while (l < r) {
            swap(ans[l++], ans[r--]);
        }
        return ans;
    }
};

int main(int argc, char const *argv[])
{
    vector<string> tests = {
        "",
        "hello",
        "A man, a plan, a canal: Panama"
    };
    Solution sol;
    for (auto t: tests) {
        cout << "Reverse(\"" << t << "\") -> "
             << sol.reverseString(t) << endl;
        assert(t == sol.reverseString(sol.reverseString(t)));
    }
    return 0;
}
