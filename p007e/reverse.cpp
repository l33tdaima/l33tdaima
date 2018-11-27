// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int reverse(int x) {
        int ans = 0;
        while (x != 0) {
            int d =  x % 10;
            // overflow detection for postive
            if (ans > INT_MAX / 10 || (ans == INT_MAX / 10 && d > 7)) {
                return 0;
            }
            // overflow detection for negative
            if (ans < INT_MIN / 10 || (ans == INT_MIN / 10 && d < -8)) {
                return 0;
            }
            ans = ans * 10 + d;
            x /= 10;
        }
        return ans;
    }
};

int main(int argc, char const *argv[])
{
    vector<int> tests = {
        123, -123, 120, 0, 8, INT_MAX, INT_MIN, INT_MAX/10 + 6, INT_MIN/10 - 5
    };
    for (int t: tests) {
        Solution sol;
        cout << "Reverse " << t << " -> " 
             << sol.reverse(t) << endl;
    }
    return 0;
}
