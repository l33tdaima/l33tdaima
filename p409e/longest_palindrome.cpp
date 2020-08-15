// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <iostream>
#include <assert.h>

using namespace std;

class Solution {
public:
    int longestPalindrome(string s) {
        int charCount[256] = {0};
        for (char c: s) charCount[c]++;
        int ans = 0, hasOdd = false;
        for (int i = 'A'; i <= 'z'; ++i) {
            ans += charCount[i] / 2 * 2;
            if (!hasOdd && charCount[i] % 2 != 0) hasOdd = true;
        }
        return ans + (hasOdd ? 1 : 0);
    }
    int longestPalindromeV2(string s) {
        int charCount[256] = {0};
        for (char c: s) charCount[c]++;
        int odds = 0;
        for (int i = 'A'; i <= 'z'; ++i) {
            odds += charCount[i] & 1;
        }
        return s.length() - odds + (odds > 0);
    }
};
// TEST
struct Test {
    string s;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.longestPalindromeV2(s);
        cout << "Longest palindrome from \"" << s << "\" -> "
             << actual << endl;
        assert(actual == expected); 
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        { "a", 1},
        { "abc", 1},
        { "aa", 2},
        { "aabb", 4},
        { "abbc", 3},
        { "abccccdd", 7}
    };
    for (auto& t: tests) t.run();
    return 0;
}
