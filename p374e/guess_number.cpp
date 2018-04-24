// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <cstdlib>
#include <iostream>
// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num) {
    int target = 16;
    if (num < target) { 
        return 1; 
    } else if (num > target) {
        return -1;
    } else {
        return 0;
    }
}

class Solution {
public:
    int guessNumber(int n) {
        int l = 1, r = n;
        while (l <= r) {
            int m = (r - l) / 2 + l; // this will avoid overflow
            int res = guess(m);
            if (res == 0) { return m; }
            if (res < 0) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return -1; // exception
    }
};

int main(int argc, char* argv[]) {
    Solution sol;
    std::cout << sol.guessNumber(100) << std::endl;
    return 0;
}
