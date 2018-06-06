// Build program by
// g++ -std=c++11 find_kth_largest.cpp -o test && ./test && rm test
#include <unordered_set>
#include <iostream>

using namespace std;

class Solution {
public:
    bool isHappy(int n) {
        auto next = [](int n) -> int {
            int sum = 0;
            while (n != 0) {
                sum += (n%10) * (n%10);
                n /= 10;
            }
            return sum;
        };
        unordered_set<int> set;
        while (n != 1) {
            n = next(n);
            if (set.find(n) != set.end()) {
                return false;
            } else {
                set.insert(n);
            }
        }
        return true;
    }
};
// TEST
int main() {
    Solution sol;
    cout << "Happy number within 100 -> ";
    for (int n = 1; n <= 100; ++n) {
        if (sol.isHappy(n)) {
            cout << n << " ";
        }
    }
    cout << endl;
    return 0;
}