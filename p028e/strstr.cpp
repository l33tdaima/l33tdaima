// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <string>
#include <initializer_list>
#include <iostream>

using namespace std;
class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.length() == 0) { return 0; }
        if (haystack.length() < needle.length()) { return -1; }
        for (int i = 0; i <= (haystack.length() - needle.length()); ++i) {
            if (haystack[i] != needle[0]) { continue; }
            int j = 1;
            for (; j < needle.length(); ++j) {
                if (haystack[i+j] != needle[j]) { break; }
            }
            if (j == needle.length()) {
                return i;
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
    initializer_list<Test> tests = {
        {"", "a"},
        {"abc", ""},
        {"hello", "ll"},
        {"aaaaa", "bba"},
        {"bac", "a"},
        {"abcdef", "bde"},
    };
    for (const Test&t : tests) {
        t.run();
    }
    return 0;
}
