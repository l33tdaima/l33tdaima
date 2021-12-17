// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm -f test

#include <cassert>
#include <iostream>
#include <vector>

using namespace std;
class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix)
    {
        vector<vector<int>> dp(matrix.size() + 1, vector<int>(matrix[0].size() + 1, 0));
        int maxsqlen = 0;
        for (int i = 0; i < matrix.size(); ++i) {
            for (int j = 0; j < matrix[i].size(); ++j) {
                if (matrix[i][j] == '1') {
                    dp[i + 1][j + 1] = min(dp[i][j], min(dp[i][j + 1], dp[i + 1][j])) + 1;
                    maxsqlen = max(maxsqlen, dp[i + 1][j + 1]);
                }
            }
        }
        return maxsqlen * maxsqlen;
    };
};
// TEST Driver
struct Test {
    vector<vector<char>> matrix;
    int expected;

    void run()
    {
        Solution sol;
        cout << "[" << endl;
        for (const auto& row : matrix) {
            for (const auto& c : row)
                cout << c << ", ";
            cout << endl;
        }
        cout << "]" << endl;
        auto actual = sol.maximalSquare(matrix);
        cout << "Maximal square -> " << actual << endl;
        assert(actual == expected);
    }
};
// TEST
int main(int argc, char* argv[])
{
    vector<Test> tests = {
        { { { '1', '0', '1', '0', '0' },
              { '1', '0', '1', '1', '1' },
              { '1', '1', '1', '1', '1' },
              { '1', '0', '0', '1', '0' } },
            4 },
        { { { '0', '1' }, { '1', '0' } }, 1 },
        { { { '0' } }, 0 },
    };
    for (Test& t : tests) {
        t.run();
    }
    return 0;
}
