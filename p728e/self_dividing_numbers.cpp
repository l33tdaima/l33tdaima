// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> selfDividingNumbers(int left, int right) {
        auto isSelfDividingNumber = [](int x) -> bool {
            int n = x;
            while (n) {
                if (n % 10 == 0 || x % (n % 10) != 0) return false;
                n /= 10;
            }
            return true;
        };
        vector<int> ans;
        for (int n= left; n<= right; ++n) {
            if (isSelfDividingNumber(n)) ans.push_back(n);
        }
        return ans;
    }
};
int main(int argc, char const *argv[])
{
    cout << "Self dividing numbers from 1 to 100 -> [";
    Solution sol;
    auto ans =  sol.selfDividingNumbers(1, 100);
    for (auto a: ans) cout << a << ", ";
    cout << "]" << endl;
    return 0;
}
