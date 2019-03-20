// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> sortedSquares(vector<int>& A) {
        vector<int> ans(A.size(), 0);
        for (int l = 0, r = A.size() - 1, i = r; i >= 0; i--) {
            int lsq = A[l] * A[l], rsq = A[r] * A[r];
            if (lsq > rsq) {
                ans[i] = lsq;
                l++;
            } else {
                ans[i] = rsq;
                r--;
            }
        }
        return ans;
    }
};

int main(int argc, char* argv[]) {
    vector<vector<int>> tests = {
        {-4,-1,0,3,10},
        {-7,-3,2,3,11}
    };
    Solution sol;
    for (auto& t: tests) {
        vector<int> actual = sol.sortedSquares(t);
        cout << "Squares of a sorted array -> [";
        for (int n: actual) cout << n << ",";
        cout << "]" << endl;
    }
    return 0;
}