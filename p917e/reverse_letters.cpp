// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <utility>

#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    string reverseOnlyLetters(string S) {
        int l = 0, r = S.length() - 1;
        while (l < r) {
            if ((S[l] < 'A' || S[l] > 'Z') &&
                (S[l] < 'a' || S[l] > 'z')) {
                l++; continue;
            }
            if ((S[r] < 'A' || S[r] > 'Z') &&
                (S[r] < 'a' || S[r] > 'z')) {
                r--; continue;
            }
            swap(S[l++], S[r--]);
        }
        return S;
    }
};
// TESTS
struct Test {
    string input;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.reverseOnlyLetters(input);
        cout << "Reverse only letters of "
             << input << " -> " << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char* argv[]) {
    vector<Test> tests = {
        { "ab-cd", "dc-ba" },
        { "a-bC-dEf-ghIj", "j-Ih-gfE-dCba" },
        { "Test1ng-Leet=code-Q!", "Qedo1ct-eeLg=ntse-T!" }
    };
    for (auto& t: tests) t.run();
    return 0;
}