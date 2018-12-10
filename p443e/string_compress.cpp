// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>

#include <string>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int compress(vector<char>& chars) {
        int k = 0, count = 1;
        for (int i = 1; i <= chars.size(); ++i) {
            if (i == chars.size() || chars[i] != chars[k]) {
                if (count > 1) { // append count literals
                    string countStr = to_string(count);
                    for (char c: countStr) chars[++k] = c;
                    count = 1;
                }
                if (i < chars.size()) chars[++k] = chars[i];
            } else {
                count++;
            }
        }
        return k + 1;
    }
};
// TEST
struct Test {
    string str;
    int expected;
    void run() {
        vector<char> chars(str.size());
        copy(str.begin(), str.end(), chars.begin());
        Solution sol;
        int actual = sol.compress(chars);
        cout << "Compress of " << str << " -> " << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            "a",
            1
        },
        {
            "aabbccc",
            6
        },
        {
            "abbbbbbbbbbbb",
            4
        }
    };
    for (auto &t: tests) t.run();
    return 0;
}
