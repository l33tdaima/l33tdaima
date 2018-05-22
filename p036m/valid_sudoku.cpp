// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <initializer_list>
#include <iostream>

using namespace std;

class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        bool existedByRow[9][9] = { false }; // Does number 1-9 exist in row 0-8
        bool existedByCol[9][9] = { false }; // Does number 1-9 exist in col 0-8
        bool existedByBox[9][9] = { false }; // Does number 1-9 exist in box 0-8

        for (int i = 0; i < 9; ++i) {
            for (int j = 0; j < 9; ++j) {
                if (board[i][j] == '.') continue;
                int digit = board[i][j] - '1';
                // validate row
                if (existedByRow[i][digit]) { return false; }
                existedByRow[i][digit] = true;
                // validate col
                if (existedByCol[j][digit]) { return false; }
                existedByCol[j][digit] = true;
                // validate box
                int box = (i/3) * 3 + (j/3); // map to box index 0-8
                if (existedByBox[box][digit]) { return false; }
                existedByBox[box][digit] = true;
           }
        }
        return true;
    }
};
struct Test {
    initializer_list< initializer_list<char> > ilBoard;
    void run() {
        vector<vector<char>> board;
        for (const auto& ril: ilBoard) {
            vector<char> row(ril);
            board.push_back(row);
        }
        Solution sol;
        cout << "Is valid sudoku? -> " << boolalpha 
             << sol.isValidSudoku(board) << endl;
    }
};
// TEST
int main() {
    initializer_list<Test> tests = {
        {{
          {'5','3','.','.','7','.','.','.','.'},
          {'6','.','.','1','9','5','.','.','.'},
          {'.','9','8','.','.','.','.','6','.'},
          {'8','.','.','.','6','.','.','.','3'},
          {'4','.','.','8','.','3','.','.','1'},
          {'7','.','.','.','2','.','.','.','6'},
          {'.','6','.','.','.','.','2','8','.'},
          {'.','.','.','4','1','9','.','.','5'},
          {'.','.','.','.','8','.','.','7','9'}
        }},
        {{
          {'8','3','.','.','7','.','.','.','.'},
          {'6','.','.','1','9','5','.','.','.'},
          {'.','9','8','.','.','.','.','6','.'},
          {'8','.','.','.','6','.','.','.','3'},
          {'4','.','.','8','.','3','.','.','1'},
          {'7','.','.','.','2','.','.','.','6'},
          {'.','6','.','.','.','.','2','8','.'},
          {'.','.','.','4','1','9','.','.','5'},
          {'.','.','.','.','8','.','.','7','9'}
        }}
    };
    for (auto t: tests) { t.run(); }
    return 0;
}