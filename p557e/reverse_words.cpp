// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <utility>

#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    string reverseWords(string s) {
        auto reverse = [](string& str, int l, int r) -> void {
            while (l < r) swap(str[l++], str[r--]);
        };
        size_t start = 0, end = 0;
        while ((end = s.find(' ', start)) != string::npos) {
            reverse(s, start, end - 1);
            start = end + 1;
        }
        reverse(s, start, s.length() - 1);
        return s;        
    }
};
// TEST
struct Test {
    string s;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.reverseWords(s);
        cout << "Reverse words in \"" << s << "\" -> \"" << actual << "\"" << endl;
        assert(actual == expected);
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            "Let's take LeetCode contest",
            "s'teL ekat edoCteeL tsetnoc"
        },
        {
            "Let's  take LeetCode contest",
            "s'teL  ekat edoCteeL tsetnoc"
        },
        {
            "Let's  take LeetCode contest   ",
            "s'teL  ekat edoCteeL tsetnoc   "
        }
    };
    for (auto &t: tests) t.run();
    return 0;
}
