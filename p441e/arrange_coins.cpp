// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <cmath>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int arrangeCoins(int n) {
        long l = 0, r = n / 2 + 1;
        while (l < r) {
            long m = (l + r + 1) / 2;
            long sum = m * (m + 1);
            if (sum <= 2 * static_cast<long>(n))
                l = m;
            else
                r = m - 1;
        }
        return static_cast<int>(l);
    }
    int arrangeCoinsMath(int n) {
        return (int)((sqrt(1 + 8 * (long)n) - 1) / 2);
    }
};
// TEST
struct Test {
    int n;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.arrangeCoins(n);
        cout << "The number of full staircase rows of " 
             << n << " -> " << actual << endl;
        assert(actual == expected);
        actual = sol.arrangeCoinsMath(n);
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {5, 2},
        {8, 3},
        {9, 3},
        {10, 4}
    };
    for (auto &t: tests) t.run();
    return 0;
}
