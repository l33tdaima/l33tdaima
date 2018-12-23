// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <utility>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    string reverseStr(string s, int k) {
        string ans = s;
        int len = s.length();
        auto reverse = [](string& str, int l, int r) -> void {
            while (l < r) swap(str[l++], str[r--]);
        };
        for (int start = 0; start < len; start += 2*k) {
            int end = (start + k < len) ? start + k - 1 : len - 1;
            reverse(ans, start, end);
        }
        return ans;
    }
};
// TEST
struct Test {
    string s;
    int k;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.reverseStr(s, k);
        cout << "Reserse \"" << s << "\" with k = " << k << " -> "
             << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char const *argv[])
{
    vector <Test> tests = {
        {
            "", 1, ""
        },
        {
            "a", 2, "a"
        },
        {
            "abcdefg", 2, "bacdfeg"
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
