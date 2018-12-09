// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    string addStrings(string num1, string num2) {
        int i = num1.size() - 1, j = num2.size() - 1;
        if (i < j) return addStrings(num2, num1);
        int carry = 0;
        for (; i >= 0 || j >= 0; i--, j--) {
            int digit = carry;
            if (i >= 0 && j >= 0) {
                digit += (num1[i] - '0') + (num2[j] - '0');
            } else if (i >= 0) {
                digit += num1[i] - '0';
            } else {
                digit += num2[j] - '0';
            }
            num1[i] = '0' + (digit % 10);
            carry = digit / 10;
        }
        return carry ? '1' + num1 : num1; 
    }
};
// TEST
struct Test {
    string num1;
    string num2;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.addStrings(num1, num2);
        cout << num1 << " + " << num2 << " = "
             << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            "1", "1", "2"
        },
        {
            "123", "45", "168"
        },
        {
            "9999", "1", "10000"
        },
        {
            "9999", "20", "10019"
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
