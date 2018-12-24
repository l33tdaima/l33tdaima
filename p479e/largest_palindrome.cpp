// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <cmath>
#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int largestPalindrome(int n) {
        if (n < 1) return -1;
        else if (n == 1) return 9;

        auto buildPalindrome = [](int n) -> long {
            string s = to_string(n);
            reverse(s.begin(), s.end());
            return stol(to_string(n) + s);
        };
        
        int upper = pow(10, n) - 1;
        int lower = pow(10, n - 1);
        for (int i = upper; i >= lower; --i) {
            long cand = buildPalindrome(i);
            for (long j = upper; j*j >= cand; j--) {
                if (cand % j == 0 && cand / j <= upper) {
                    return cand % 1337;
                }
            }
        }
        return -1;
    }
};
int main(int argc, char const *argv[])
{
    Solution sol;
    for (int n = 1; n <= 8; ++n) {
        cout << "Largest palindrome build from two " 
             << n << " digits -> " 
             << sol.largestPalindrome(n) << endl;
    }
    return 0;
}
