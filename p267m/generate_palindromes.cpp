// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <string>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<string> generatePalindromes(string s) {
        vector<string> ans;
        if (s.length() == 0) { return ans; }
        // Step 1: count the occurrence of each character
        int charCount[256] = {0};
        for (char c: s) {
            charCount[c] ++;
        }
        // Step 2: produce the sorted list for permutation
        string perm, odd;
        for (int i = 0; i < 256; ++i) {
            if (charCount[i] == 0) { continue; }
            perm.append(charCount[i]/2, static_cast<char>(i));
            if (charCount[i] & 1) {
                odd += static_cast<char>(i);
            }
        }
        if (odd.length() > 1) { return ans; }
        // Step 3: Generate the results
        do {
            string second(perm);
            reverse(second.begin(), second.end());
            ans.push_back(perm + odd + second);
        } while (next_permutation(perm.begin(), perm.end()));
        return ans;
    }
};
int main(int argc, char const *argv[])
{
    vector<string> tests = {
        "",
        "a",
        "abc",
        "aab",
        "aaa",
        "aabb",
        "aaaabb",
    };
    Solution sol;
    for (auto& t: tests) {
        cout << "Palindrome permutations of " << t << " ->" << endl;
        vector<string> act = sol.generatePalindromes(t);
        for (auto& a: act) {
            cout << a << ", ";
        }
        cout << "\n------" << endl;
    }
    return 0;
}
