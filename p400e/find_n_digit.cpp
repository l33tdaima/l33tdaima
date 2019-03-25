// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int findNthDigit(int n) {
        int digits = 1, start = 1;
        long count = 9;
        while (n > digits * count) {
            n -= digits * count;
            digits ++;
            count *= 10;
            start *= 10;
        }
        start += (n - 1) / digits;
        return to_string(start)[(n - 1) % digits] - '0';
    }
};
// TEST
struct Test {
    int n;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.findNthDigit(n);
        cout << "The " << n << "th digit of natual sequence -> "
             << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {0, 0},
        {1, 1},
        {9, 9},
        {57, 3},
        {250, 1}
    };
    for (auto &t: tests) t.run();
    return 0;
}
