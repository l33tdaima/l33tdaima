// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <cassert>
#include <iostream>
#include <string>
#include <vector>

using namespace std;
class Solution {
public:
    string reverseOnlyLetters(string s)
    {
        for (int i = 0, j = s.length() - 1; i < j;) {
            if ((s[i] < 'A' || s[i] > 'Z') && (s[i] < 'a' || s[i] > 'z')) {
                i++;
            } else if ((s[j] < 'A' || s[j] > 'Z') && (s[j] < 'a' || s[j] > 'z')) {
                j--;
            } else {
                swap(s[i++], s[j--]);
            }
        }
        return s;
    }
};
// TESTS
struct Test {
    string input;
    string expected;
    void run()
    {
        Solution sol;
        string actual = sol.reverseOnlyLetters(input);
        cout << "Reverse only letters of "
             << input << " -> " << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char* argv[])
{
    vector<Test> tests = {
        { "ab-cd", "dc-ba" },
        { "a-bC-dEf-ghIj", "j-Ih-gfE-dCba" },
        { "Test1ng-Leet=code-Q!", "Qedo1ct-eeLg=ntse-T!" }
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
