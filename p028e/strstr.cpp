// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <string>
#include <vector>
#include <iostream>

using namespace std;
class Solution {
public:
    int strStr(string haystack, string needle) {
        for (int i = 0;; ++i) {
            for (int j = 0;; ++j) {
                if (j == needle.length()) return i; // found
                if (i + j == haystack.length()) return -1;
                if (haystack[i + j] != needle[j]) break;
            }
        }
        return -1;
    }
};
// TEST
struct Test {
    string haystack;
    string needle;
    void run() const {
        Solution sol;
        int ret = sol.strStr(haystack, needle);
        cout << "strStr(\"" << haystack << "\", \"" << needle << "\") -> "
             << ret << endl;
    }
};
int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {"", "a"},
        {"abc", ""},
        {"hello", "ll"},
        {"aaaaa", "bba"},
        {"bac", "a"},
        {"abcdef", "bde"}
    };
    for (const Test&t : tests) t.run();
    return 0;
}
