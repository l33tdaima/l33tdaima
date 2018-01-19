#include <vector>
#include <initializer_list>
#include <iostream>

using namespace std;
class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix) {
        if (matrix.empty()) return 0;
        vector< vector<int>> dp(matrix.size() + 1);
        dp[0].assign(matrix[0].size() + 1, 0);
        int maxsqlen = 0;
        for (int i = 0; i < matrix.size(); ++i) {
            dp[i+1].assign(matrix[i].size() + 1, 0);
            for (int j = 0; j < matrix[i].size(); ++j) {
                if (matrix[i][j] == '1') {
                    dp[i+1][j+1] = min(dp[i][j], min(dp[i][j+1], dp[i+1][j])) + 1;
                    if (dp[i+1][j+1] > maxsqlen) { maxsqlen = dp[i+1][j+1]; }
                }
            }
        }
        return maxsqlen * maxsqlen;
    };
};
// TEST Driver
struct Test {
    initializer_list< initializer_list<char>> ilist;
    int expected;

    void run() const {
        Solution sol;
        vector< vector<char>> matrix;
        cout << "[" << endl;
        for (const auto& ril: ilist) {
            vector<char> row(ril);
            matrix.push_back(row);
            for (const auto& c: row)
                cout << c << ", ";
            cout << endl;
        }
        cout << "]" << endl;
        auto res = sol.maximalSquare(matrix);
        cout << "Maximal square -> " << res << ", "
             << std::boolalpha << (res == expected) << endl;
    }
};
// TEST
int main(int argc, char* argv[]) {
    initializer_list<Test> tests = {
        {{{}}, 0},
        {{{'1'}}, 1},
        {{{'0', '1'}, {'1', '0'}}, 1},
        {{{'1','0','1','0','0'},
          {'1','0','1','1','1'},
          {'1','1','1','1','1'},
          {'1','0','0','1','0'}}, 4}
    };
    for (const Test& t: tests) {
        t.run();
    }
    return 0;
}
