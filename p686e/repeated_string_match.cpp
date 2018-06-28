// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int repeatedStringMatch(string A, string B) {
        int a = 0, b = 0, astart = 0;
        int alen = A.length();
        int count = 1;
        while (b < B.length()) {
            if (A[a] == B[b]) { 
                a ++; b ++;
                if (a == A.length() && b < B.length()) {
                    a = 0; count ++;
                }
            } else {
                if (astart == alen - 1) { return -1; }
                b = 0; a = ++astart; count = 1; // reset
            }
        }
        return count;
    }
};
// TEST
struct Test {
    string A;
    string B;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.repeatedStringMatch(A, B);
        cout << "Repeated string match (A=" << A
             << ", B=" << B << ") -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {"aabaa", "aaab", 2},
        {"axaxaya", "axaya", 1},
        {"abcd", "zzzz", -1},
        {"abcd", "cd", 1},
        {"abcd", "cdabcdab", 3},
        {"abababaaba", "aabaaba", 2},
        {"abcd", "cdabcdacdabcda", -1},
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
