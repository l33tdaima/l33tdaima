// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <cassert>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board)
    {
        bool rowd[9][9] = { false }; // Does number 1-9 exist in row 0-8
        bool cold[9][9] = { false }; // Does number 1-9 exist in col 0-8
        bool boxd[9][9] = { false }; // Does number 1-9 exist in box 0-8

        for (int i = 0; i < 9; ++i) {
            for (int j = 0; j < 9; ++j) {
                if (board[i][j] == '.')
                    continue;
                int digit = board[i][j] - '1';
                int k = (i / 3) * 3 + (j / 3); // map to box index 0-8
                if (rowd[i][digit] || cold[i][digit] || boxd[k][digit]) {
                    return false;
                }
                rowd[i][digit] = true;
                cold[j][digit] = true;
                boxd[k][digit] = true;
            }
        }
        return true;
    }
};
struct Test {
    vector<vector<char>> board;
    bool expected;
    void run()
    {
        Solution sol;
        cout << "Is valid sudoku? -> " << boolalpha
             << sol.isValidSudoku(board) << endl;
    }
};
// TEST
int main()
{
    vector<Test> tests = {
        { { { '5', '3', '.', '.', '7', '.', '.', '.', '.' },
              { '6', '.', '.', '1', '9', '5', '.', '.', '.' },
              { '.', '9', '8', '.', '.', '.', '.', '6', '.' },
              { '8', '.', '.', '.', '6', '.', '.', '.', '3' },
              { '4', '.', '.', '8', '.', '3', '.', '.', '1' },
              { '7', '.', '.', '.', '2', '.', '.', '.', '6' },
              { '.', '6', '.', '.', '.', '.', '2', '8', '.' },
              { '.', '.', '.', '4', '1', '9', '.', '.', '5' },
              { '.', '.', '.', '.', '8', '.', '.', '7', '9' } },
            true },
        { { { '8', '3', '.', '.', '7', '.', '.', '.', '.' },
              { '6', '.', '.', '1', '9', '5', '.', '.', '.' },
              { '.', '9', '8', '.', '.', '.', '.', '6', '.' },
              { '8', '.', '.', '.', '6', '.', '.', '.', '3' },
              { '4', '.', '.', '8', '.', '3', '.', '.', '1' },
              { '7', '.', '.', '.', '2', '.', '.', '.', '6' },
              { '.', '6', '.', '.', '.', '.', '2', '8', '.' },
              { '.', '.', '.', '4', '1', '9', '.', '.', '5' },
              { '.', '.', '.', '.', '8', '.', '.', '7', '9' } },
            false },
    };
    for (auto t : tests) {
        t.run();
    }
    return 0;
}
