// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <initializer_list>
#include <iostream>
using namespace std;

class Solution {
public:
    bool isPowerOfFourV1(int num) {
        if (num < 0) { return false; }
        while (num >= 4) {
            if (num % 4 != 0) { return false; }
            num /= 4;
        }
        return (num == 1);
    }
    bool isPowerOfFourV2(int num) {
        return num > 0                     // positive
               && (num & (num - 1)) == 0   // power of 2
               && (num & 0x55555555) != 0; // no 1 on odd bit, mask by for each word 0101
    }
};
// TEST
int main() {
    auto tests = {-1, 0, 1, 2, 4, 5, 8, 10, 16, 262144};
    for (const auto& t: tests) {
        Solution sol;
        cout << "Is " << t << " power of four? -> "
             << boolalpha << sol.isPowerOfFourV1(t) << " "
             << boolalpha << sol.isPowerOfFourV2(t)
             << endl;
    }
    return 0;
}