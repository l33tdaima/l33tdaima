// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <limits>
#include <iostream>

using namespace std;

class Solution {
public:
    int getSum(int a, int b) {
        int sum = a ^ b;
        int carry = a & b;
        if (carry) {
            return getSum(sum, carry << 1);
        } else {
            return sum;
        }
    }
    int getSumIter(int a, int b) {
        int sum = a ^ b;
        int carry = a & b;
        while (carry != 0) {
            int newcarry = sum & (carry << 1);
            sum = sum ^ (carry << 1);
            carry = newcarry;
        }
        return sum;
    }
    int getSumIterV2(int a, int b) {
        while (b != 0) {
            int carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        return a;
    }
};
// TESTS
int main(int argc, char const *argv[])
{
    vector< vector<int> > tests = {
        {1, 2},
        {232, -76},
        {2, 3},
        {0, 4},
        {4, 0}
    };
    Solution sol;
    for (auto& t: tests) {
        assert(sol.getSum(t[0], t[1]) == t[0] + t[1]);
        assert(sol.getSumIter(t[0], t[1]) == t[0] + t[1]);
        assert(sol.getSumIterV2(t[0], t[1]) == t[0] + t[1]);
    }
    return 0;
}
