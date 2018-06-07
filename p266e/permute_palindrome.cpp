// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <string>
#include <bitset>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    bool canPermutePalindrome(string s) {
        int letterCount[256] = {0};
        for (char c: s) {
            letterCount[c] ++;
        }
        int odds = 0;
        for (int i = 0; i < 256; ++i) {
            if (letterCount[i] & 1) {
                odds ++;
            }
        }
        return (odds <= 1);
    }
    bool canPermutePalindromeOpt(string s) {
        bitset<256> b;
        for (char c : s)
            b.flip(c);
        return b.count() < 2;
    }
};
int main() {
    vector<string> tests = {
        "code",
        "aab",
        "carerac",
        "AaBb//a",
    };
    Solution sol;
    for (const string& t: tests) {
        cout << "Can " << t << " permute to palindrome? -> "
             << boolalpha << sol.canPermutePalindromeOpt(t) << endl;
    }
    return 0;
}